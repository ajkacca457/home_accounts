import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name of user is required"],
        maxLength:[50,"Name cant be longer than 50 charachter"],
        minLength:[10,"Full name is required"],
        trim:true
    }
})


export default mongoose.model("User",UserSchema);