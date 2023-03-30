import mongoose from "mongoose";
import {CommonReducer} from "../utils/UtilFunctions.js";

const AdvancedStats=(model)=>async(req,res,next)=>{

    const modelStats= await model.aggregate([
        {$match:{createdBy:mongoose.Types.ObjectId(req.user.userId)}},
        {
            $facet:{
                statusInfo:[{
                    $group:{_id:"$status",count:{$sum:1}, amount:{$sum:"$amount"}}
                }],
                categoryInfo:[{
                    $group:{_id:"$category",count:{$sum:1}, amount:{$sum:"$amount"}}
                }],
                totalAmount:[{ $group: {_id: '',"Amount": { $sum: '$amount' }}}]
            }
        },

    ])

    if(!modelStats) {
        return next(new CustomError("stats are not available",StatusCodes.NOT_FOUND))
    }

    const {statusInfo, categoryInfo,totalAmount}= modelStats[0];

    const categoryStats= CommonReducer(categoryInfo);
    const statusStats= CommonReducer(statusInfo);
    const {Amount}= totalAmount[0]

    res.advancedStats= {
        categoryStats,
        statusStats,
        Amount,
    }

    next();

}


export default AdvancedStats;
