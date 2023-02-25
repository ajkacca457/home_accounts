// for all incomes

export const getIncomes=(req,res,next)=>{
    res.status(200).json({
        message:"will return all the income"
    })
}

// for income statistics

export const getIncomeStats=(req,res,next)=>{
    res.status(200).json({
        message:"will return stats of all incomes"
    })
}

//for single income 
export const getSingleIncome=(req,res,next)=>{
    res.status(200).json({
        message:"will get a single income"
    })
}

//  for create single income 
export const createIncome=(req,res,next)=>{
    res.status(200).json({
        message:"will create single income"
    })
}


//  for updating single income 
export const updateIncome=(req,res,next)=>{
    res.status(200).json({
        message:"will update single income"
    })
}

//  for deleting single income 
export const deleteIncome=(req,res,next)=>{
    res.status(200).json({
        message:"will delete single income"
    })
}
