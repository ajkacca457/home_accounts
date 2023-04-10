const AdvancedResult=(model)=>async (req,res,next)=>{
    let query;
    // copying req.query to keep the origin query intact(that is a best practice)
    const reqQuery={...req.query};

    const ToDelete= ["select","sort"];

    ToDelete.forEach((item)=> {
        delete reqQuery[item];
    })

    let QueryStr= JSON.stringify(reqQuery);

    QueryStr= QueryStr.replace(/\b(gt|lt|gte|lte|in)\b/g, (match)=> {
        return `$${match}`
    })

    let adjustedQuery=JSON.parse(QueryStr);


    if(req.query.status) {
    if(req.query.status==="all") {
        delete adjustedQuery.status;
    } else {
        adjustedQuery.status=req.query.status;
    }
    }

    if(req.query.category) {
    if(req.query.category==="all") {
        delete adjustedQuery.category;
    } else {
        adjustedQuery.category=req.query.category;
    }
    }

    if(req.query.title) {
        delete adjustedQuery.title;
        adjustedQuery.title={ $regex:req.query.title,$options:"i"};
    }

    let finalQuery= {...adjustedQuery,createdBy:req.user.userId}; 

    query= model.find(finalQuery);

    if(req.query.select) {
        const selectFields= req.query.select.split(",").join(" ");
        query= query.select(selectFields);
    }

    if(req.query.sort) {
        const sortFields= req.query.sort.split(",").join(" ");
        query=query.sort(sortFields);
    } else {
        query=query.sort("-createdAt");
    }

    let page= parseInt(req.query.page||1);
    let limit= parseInt(req.query.limit||10);
    let skip= (page-1)*limit;

    query= query.skip(skip).limit(limit);

    const items= await query;

    let totalItems=await model.countDocuments(finalQuery);
    let numberOfPages= Math.ceil(totalItems/limit);

    
    if(!items) {
        return next(new CustomError("Transactions are not available", StatusCodes.NOT_FOUND))
    }
    res.advancedResult= {
        data:items,
        totalItems,
        numberOfPages
    }
    next();
} 

export default AdvancedResult;