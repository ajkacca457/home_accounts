import express from "express";
import { getExpenses, getSingleExpense,getExpenseStats,createExpense,updateExpense,deleteExpense } from "../controllers/expenseController.js";
import protectRoute from "../middlewares/protectRoute.js";


const router= express();

router.route("/").get(getExpenses).post(protectRoute,createExpense);
router.route("/expense-stats").get(getExpenseStats);
router.route("/:id").get(getSingleExpense).patch(updateExpense).delete(deleteExpense);

export default router;