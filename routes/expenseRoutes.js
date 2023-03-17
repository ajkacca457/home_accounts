import express from "express";
import { getExpenses, getSingleExpense,getExpenseStats,createExpense,updateExpense,deleteExpense } from "../controllers/expenseController.js";
import AdvancedResult from "../middlewares/AdvancedResult.js";
import Expense from "../models/Expense.js";

const router= express();

router.route("/").get(AdvancedResult(Expense),getExpenses).post(createExpense);
router.route("/expense-stats").get(getExpenseStats);
router.route("/:id").get(getSingleExpense).patch(updateExpense).delete(deleteExpense);

export default router;