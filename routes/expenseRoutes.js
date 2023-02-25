import express from "express";
import { getExpenses, getSingleExpense, createExpense,updateExpense,deleteExpense } from "../controllers/expenseController.js";

const router= express();

router.route("/").get(getExpenses).post(createExpense);
router.route("/:id").get(getSingleExpense).patch(updateExpense).delete(deleteExpense);

export default router;