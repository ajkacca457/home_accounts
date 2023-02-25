// for all expenses

export const getExpenses=(req,res,next)=>{
    res.status(200).json({
        message:"will return all the expenses"
    })
}


//for single expense 
export const getSingleExpense=(req,res,next)=>{
    res.status(200).json({
        message:"will get a single expense"
    })
}

