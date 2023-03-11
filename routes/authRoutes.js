import express from "express";
import { loginUser,registerUser,updateUser } from "../controllers/authController.js";
import protectRoute from "../middlewares/protectRoute.js";
const router= express();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

router.route("/updateuser").patch(protectRoute,updateUser);

export default router;