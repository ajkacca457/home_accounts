import User from "../models/User.js"
import AsyncHandler from "../middlewares/AsyncHandler.js"
// for login

export const loginUser=AsyncHandler((req,res,next)=>{
    res.status(200).json({
        message:"will send token for login"
    })
})

// for register

export const registerUser=AsyncHandler((req,res,next)=>{
    res.status(200).json({
        message:"will create user and will send token"
    })
})


