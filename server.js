import  express  from "express";
import dotenv from "dotenv";

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

app.listen(PORT,()=>{
    console.log(`server is running! ${process.env.PORT}`);
});




