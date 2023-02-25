import express from "express";
import { loginUser,registerUser } from "../controllers/authController.js";
const router= express();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;