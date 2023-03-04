import Income from "../models/Income.js";
import AsyncHandler from "../middlewares/AsyncHandler.js";

// for all incomes

export const getIncomes=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will return all the income"
    })
})

// for income statistics

export const getIncomeStats=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will return stats of all incomes"
    })
})

//for single income 
export const getSingleIncome=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will get a single income"
    })
})

//  for create single income 
export const createIncome=AsyncHandler(async (req,res,next)=>{
    console.log(req.body);
    res.status(200).json({
        message:"will create single income"
    })
})


//  for updating single income 
export const updateIncome=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will update single income"
    })
})

//  for deleting single income 
export const deleteIncome=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will delete single income"
    })
})
