import User from "../models/User.js"
import AsyncHandler from "../middlewares/AsyncHandler.js"
import CustomError from "../utils/CustomError.js"
import { StatusCodes } from "http-status-codes"
// for login

export const loginUser=AsyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"will send token for login"
    })
})

// for register

export const registerUser=AsyncHandler(async (req,res,next)=>{
    const {firstname,lastname,email,password}=req.body;
    const user= await User.create({
        firstname,lastname,email,password
    });

    if(!user) {
        return next(new CustomError("User cant be created",StatusCodes.BAD_REQUEST));
    }

    user.getToken();

    res.status(200).json({
        data:user,
        message:"New user created"
    })
})


