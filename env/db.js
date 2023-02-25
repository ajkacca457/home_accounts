import mongoose from "mongoose";


const ConnectDB=(url)=>{
    const conn= mongoose.connect(process.env.MONGO_URI);
    return conn;
}

export default ConnectDB;