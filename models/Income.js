import mongoose from "mongoose";

const IncomeSchema= new mongoose.Schema({
    title: {
        type:String,
        required: [true,"transaction title is required"],
        maxLength: [100, "title can't be more than 100 charachter"],
        trim:true
    }
})


export default mongoose.model("Income",IncomeSchema);