import mongoose from "mongoose";
import validator from "validator";

const UserSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"first name of user is required"],
        minLength:[3,"first name cant be shorter than 3 character"],
        maxLength:[20,"first name cant be longer than 20 character"],
        trim:true
    },
    lastname:{
        type:String,
        required:[true,"last name of user is required"],
        minLength:[3,"last name cant be shorter than 3 character"],
        maxLength:[20,"last name cant be longer than 20 character"],
        trim:true
    },
    email: {
        type:String,
        unique:true,
        required:[true, "email is required for user"],
        validate:{
            //use validator package for email validation
            validator:validator.isEmail,
            message:"please a valid email address"
        }
    },
    password:{
        type:String,
        required:[true, "password is required for user"],
        trim:true,
        minLength:6,
        maxLength:25
    },
    location: {
        type:String,
        trim:true,
        maxLength:25,
        default:"My City"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})


export default mongoose.model("User",UserSchema);