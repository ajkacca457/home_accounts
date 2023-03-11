import mongoose from "mongoose";


const ExpenseSchema= new mongoose.Schema({
    title: {
        type:String,
        required: [true,"transaction title is required"],
        maxLength: [100, "title can't be more than 100 charachter"],
        trim:true
    },
    information: {
        type:String,
        require:[true,"transaction information is required"],
        minLength:[10,"information cant be shorter than 10 charachter"],
        maxLength:[100,"information cant be longer than 100 charachter"],
    },
    amount: {
        type:Number,
        required: [true, "transaction amount is required"],
    },
    category: {
    type:String,
    required:[true, "category is required"],
    enum: ["Groceries","Rent", "Insurance", "Entertainment", "Education","Health","Miscellaneous"]
    },
    status: {
        type:String,
        required:[true,"status is required"],
        enum:["paid","due"]
    },

    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:[true, "user is required for transaction"]
        
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})


export default mongoose.model("Expense", ExpenseSchema);