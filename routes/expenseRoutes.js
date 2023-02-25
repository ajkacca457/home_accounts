import express from "express";
import { getExpenses, getSingleExpense } from "../controllers/expenseController.js";

const router= express();

router.route("/").get(getExpenses);
router.route("/:id").get(getSingleExpense);

export default router;