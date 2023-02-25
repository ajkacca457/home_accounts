import Expense from "../models/Expense.js"
// for all expenses

export const getExpenses=(req,res,next)=>{
    res.status(200).json({
        message:"will return all the expenses"
    })
}

// for expense statistics

export const getExpenseStats=(req,res,next)=>{
    res.status(200).json({
        message:"will return stats of all expenses"
    })
}

//for single expense 
export const getSingleExpense=(req,res,next)=>{
    res.status(200).json({
        message:"will get a single expense"
    })
}

//  for create single expense 
export const createExpense=(req,res,next)=>{
    res.status(200).json({
        message:"will create single expense"
    })
}


//  for updating single expense 
export const updateExpense=(req,res,next)=>{
    res.status(200).json({
        message:"will update single expense"
    })
}

//  for deleting single expense 
export const deleteExpense=(req,res,next)=>{
    res.status(200).json({
        message:"will delete single expense"
    })
}
