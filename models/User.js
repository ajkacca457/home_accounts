import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        maxLength:25,
        select:false
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

//hash password using bcrypt
UserSchema.pre("save",async function(){
// if password modified then it will return as this route is not suppose to modify password
if(!this.isModified("password")) return; 
const salt= await bcrypt.genSalt(10);
this.password= await bcrypt.hash(this.password,salt);
})


//method for generating token 

UserSchema.methods.getToken= function() {
    return jwt.sign({userId:this._id}, process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
}


// methods for checking password bcrypt
UserSchema.methods.passwordCheck=async function(userpassword) {
    const isMatch= await bcrypt.compare(userpassword, this.password);
    return isMatch;
}


export default mongoose.model("User",UserSchema);