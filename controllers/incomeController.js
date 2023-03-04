import Income from "../models/Income.js";
import AsyncHandler from "../middlewares/AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from 'http-status-codes';

// for all incomes

export const getIncomes=AsyncHandler(async (req,res,next)=>{
    res.status(StatusCodes.OK).json({
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
    const {title,information,amount,category}= req.body;

    const income= await Income.create({
        title,information,amount,category
    });

    if(!income) {
        return next(CustomError("Income cant be created", StatusCodes.BAD_REQUEST))
    }

    res.status(StatusCodes.CREATED).json({
        data: income
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
