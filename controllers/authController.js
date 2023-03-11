import User from "../models/User.js"
import AsyncHandler from "../middlewares/AsyncHandler.js"
import CustomError from "../utils/CustomError.js"
import { StatusCodes } from "http-status-codes"
// for login

export const loginUser=AsyncHandler(async (req,res,next)=>{
    //get email and password from request
    const {email,password}= req.body;

    if(!email || !password) {
        return next(new CustomError("please provide all the value", StatusCodes.BAD_REQUEST));
    }

    // get user 
    // have to select the password as it is selected false in model

    const user= await User.findOne({email}).select("+password");

    if(!user) {
        return next(new CustomError("user doesnt exists", StatusCodes.BAD_REQUEST))
   }

   // check whether password matches 

   const isMatch= await user.passwordCheck(password);

   // to exclude password from response as it was selected during finding user
   user.password=undefined;

   if (!isMatch) {
    return next(new CustomError("password is invalid", StatusCodes.UNAUTHORIZED));
   }

   const token= user.getToken();

    res.status(200).json({
        message:"Login successful",
        token:token,
        user:user
    })
})

// for register

export const registerUser=AsyncHandler(async (req,res,next)=>{
    const {firstname,lastname,email,password}=req.body;

    if(!firstname || !lastname || !email ||!password) {
        return next(new CustomError("please provide all the values",StatusCodes.BAD_REQUEST))
    }

    const user= await User.create({
        firstname,lastname,email,password
    });

    if(!user) {
        return next(new CustomError("User cant be created",StatusCodes.BAD_REQUEST));
    }

    let token= user.getToken();

    res.status(200).json({
        user:{id:user._id, firstname:user.firstname, lastname:user.lastname, email:user.email, createdAt:user.createdAt},
        token:token,
        message:"New user created"
    })
})


//update user route
export const updateUser= AsyncHandler(async (req,res,next)=>{

    const {firstname,lastname,email,location}= req.body;

    if(!firstname||!lastname||!email||!location) {
        return next(new CustomError("please provide all the fields", StatusCodes.BAD_REQUEST));
    }

    // doesnt run password hash middleware in case of findByIdAndUpdate
    
    // const user= await User.findByIdAndUpdate(req.user.userId,{firstname,lastname,email,location}, {
    //     runValidators:true
    // } )


    const user=await User.findOne({_id:req.user.userId});

    user.firstname= firstname;
    user.lastname=lastname;
    user.email= email;
    user.location=location;

    await user.save();

    const token= user.getToken();

    res.status(200).json({
        message:"user details updated",
        token:token,
        user:user
    })  

})