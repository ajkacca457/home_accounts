import Income from "../models/Income.js";
import AsyncHandler from "../middlewares/AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from 'http-status-codes';

// for all incomes

export const getIncomes=AsyncHandler(async (req,res,next)=>{
    const incomes= await Income.find();
    if(!incomes) {
        return next(new CustomError("Transactions are not available", StatusCodes.NOT_FOUND))
    }
    res.status(StatusCodes.OK).json({
        data:incomes
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
    console.log(req.params);
    const {id}= req.params;

    const income= await Income.findById(id);

    if(!income) {
        return next( new CustomError(`Transaction with ID ${id} doesnt exists`, StatusCodes.NOT_FOUND));
    }

    res.status(200).json({
        data:income
    })
})

//  for create single income 
export const createIncome=AsyncHandler(async (req,res,next)=>{
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
    const income= await Income.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    })

    if(!income) {
        return next(new CustomError(`${req.params.id} transaction cant be updated`,StatusCodes.BAD_REQUEST))
    }

    res.status(200).json({
        data:income,
        message:"Transaction updated succesfully"
    })
})

//  for deleting single income 
export const deleteIncome=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will delete single income"
    })
})
