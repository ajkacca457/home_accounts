import express from "express";
import { getIncomes,getSingleIncome,getIncomeStats,createIncome,updateIncome,deleteIncome } from "../controllers/incomeController.js";
import Income from "../models/Income.js";
import AdvancedResult from "../middlewares/AdvancedResult.js";


const router= express();

router.route("/").get(AdvancedResult(Income),getIncomes).post(createIncome);
//order of the routes matters. If it comes after :id route it will not work
router.route("/income-stats").get(getIncomeStats);
router.route("/:id").get(getSingleIncome).patch(updateIncome).delete(deleteIncome);


export default router;