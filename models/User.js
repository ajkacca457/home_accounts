import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"first name of user is required"],
        minLength:[3,"first name cant be shorter than 3 charachter"],
        maxLength:[20,"first name cant be longer than 20 charachter"],
        trim:true
    },
    lastname:{
        type:String,
        required:[true,"last name of user is required"],
        minLength:[3,"last name cant be shorter than 3 charachter"],
        maxLength:[20,"last name cant be longer than 20 charachter"],
        trim:true
    },
    email: {
        type:String,
        unique:true,
        required:[true, "email is required for user"]
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
    }

})


export default mongoose.model("User",UserSchema);