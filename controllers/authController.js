import User from "../models/User.js"
// for login

export const loginUser=(req,res,next)=>{
    res.status(200).json({
        message:"will send token for login"
    })
}

// for register

export const registerUser=(req,res,next)=>{
    res.status(200).json({
        message:"will create user and will send token"
    })
}


