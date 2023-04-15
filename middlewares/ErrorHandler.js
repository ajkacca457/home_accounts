import { StatusCodes } from "http-status-codes";
import CustomError from "../utils/CustomError.js";

const ErrorHandler=(err,req,res,next)=>{
    let error;
    error= {...err};
    error.name= err.name;
    // to catch the error message coming from next(not from asynchandler)
    error.message=err.message;
    error.StatusCodes=err.statuscode;

    if(error.name==="ValidationError") {
        let message= Object.values(error.errors).map(item=>item.message).join(",");
        error= new CustomError(message,StatusCodes.BAD_REQUEST)
    }

    // error.value catches the value from next(error)

    if(error.name==="CastError") {
        let message= `Transaction with ID ${error.value} doesnt exists`;
        error= new CustomError(message,StatusCodes.NOT_FOUND);
    }

res.status(error.StatusCodes||500).json({
    message:error.message
})
}


export default ErrorHandler;