import { StatusCodes } from "http-status-codes";
import CustomError from "../utils/CustomError.js";

const ErrorHandler=(err,req,res,next)=>{

    let error;
    error= {...err};
    error.name= err.name;
    // to catch the error message coming from next(not from asynchandler)
    error.message=err.message;


    if(error.name==="ValidationError") {
        let message= Object.values(error.errors).map(item=>item.message).join(",");
        error= new CustomError(message,StatusCodes.BAD_REQUEST)
    }



res.status(error.StatusCodes||500).json({
    message:error.message
})
}


export default ErrorHandler;