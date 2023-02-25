import mongoose from "mongoose";


const ConnectDB=async()=>{
    const conn= await mongoose.connect(process.env.MONGO_URI,{  
        useNewUrlParser: true,
    })
    console.log(`Server is connected to ${conn.connection.host}`);

}

export default ConnectDB;