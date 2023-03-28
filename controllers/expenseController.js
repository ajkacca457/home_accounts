import Expense from "../models/Expense.js"
import AsyncHandler from "../middlewares/AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
// for all expenses

export const getExpenses=AsyncHandler(async (req,res,next)=>{
    res.status(StatusCodes.OK).json(res.advancedResult);
})

// for expense statistics

export const getExpenseStats=async(req,res,next)=>{
  
    const expensesStats= await Expense.aggregate([
        {$match:{createdBy:mongoose.Types.ObjectId(req.user.userId)}},
        {$group:{
            _id:{status:"$status",category:"$category"},
        }}
    ])


    res.status(200).json({
        expensesStats,
        message:"will return stats of all expenses"
    })
}

//for single expense 
export const getSingleExpense=AsyncHandler(async (req,res,next)=>{
    const {id}= req.params;

    const expense= await Expense.findById(id);

    if(!expense) {
        return next( new CustomError(`Transaction with ID ${id} doesnt exists`, StatusCodes.NOT_FOUND));
    }

    res.status(200).json({
        data:expense
    })
})

//  for create single expense 
export const createExpense=AsyncHandler(async (req,res,next)=>{
    const {title,information,amount,category,status}= req.body;
    const createdBy= req.user.userId;    
    const expense= await Expense.create({
        title,information,amount,category,status,createdBy
    });

    if(!expense) {
        return next(CustomError("Income cant be created", StatusCodes.BAD_REQUEST))
    }

    res.status(StatusCodes.CREATED).json({
        data: expense
    })
})

//  for updating single expense 
export const updateExpense=AsyncHandler(async (req,res,next)=>{
    const expense= await Expense.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    })

    if(!expense) {
        return next(new CustomError(`${req.params.id} transaction cant be updated`,StatusCodes.BAD_REQUEST))
    }

    res.status(200).json({
        data:expense,
        message:"Transaction updated succesfully"
    })
})

//  for deleting single expense 
export const deleteExpense=AsyncHandler(async (req,res,next)=>{
    const expense= await Expense.findByIdAndDelete(req.params.id);
    if(!expense) {
        return next(new CustomError(`${req.params.id} transaction cant be deleted`,StatusCodes.BAD_REQUEST))
    }
    res.status(200).json({
        message:`${req.params.id} transaction deleted` 
    })
})
