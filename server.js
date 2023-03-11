import  express  from "express";
import dotenv from "dotenv";
import ConnectDB from "./env/db.js";
import AuthRoutes from "./routes/authRoutes.js"
import IncomeRoutes from "./routes/incomeRoutes.js";
import ExpenseRoutes from "./routes/expenseRoutes.js"
import NotFound from "./middlewares/NotFound.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import protectRoute from "./middlewares/protectRoute.js";

dotenv.config({
   path: "./env/config.env"
})

const app= express();

app.use(express.json());

app.use("/api/v1/auth",AuthRoutes);
app.use("/api/v1/incomes",protectRoute,IncomeRoutes);
app.use("/api/v1/expenses",protectRoute,ExpenseRoutes);

app.use(NotFound);
app.use(ErrorHandler);

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




