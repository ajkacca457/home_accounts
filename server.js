import  express  from "express";
import dotenv from "dotenv";
import ConnectDB from "./env/db.js";

dotenv.config({
   path: "./env/config.env"
})

const app= express();

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"hello"
    })
})



const PORT= process.env.PORT || 5000;

const ServerStart=async()=>{
    try {
        const conn= await ConnectDB();
        app.listen(PORT,()=>{
            console.log(`Server is connected to ${conn.connection.host}`);
        });
    } catch (error) {
        console.log(error);
    }
}

ServerStart();




