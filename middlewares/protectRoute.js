import AsyncHandler from "./AsyncHandler.js";
import CustomError from "../utils/CustomError.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const protectRoute=AsyncHandler(async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token) {
        return next(new CustomError("not authorized to access the data",StatusCodes.UNAUTHORIZED))
    }

    // if(jwt.decode(token).exp<Date.now()) {
    //     return next (new CustomError("token expired",StatusCodes.UNAUTHORIZED));
    // };

    try {
        const decodedId= jwt.verify(token,process.env.JWT_SECRET);
        req.user= {userId:decodedId.userId};
        next();
    } catch (error) {
        return next(new CustomError(error.message,StatusCodes.UNAUTHORIZED))
    }

})


export default protectRoute;