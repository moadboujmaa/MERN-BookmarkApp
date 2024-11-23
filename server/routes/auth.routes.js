import { Router } from "express";
import { signup, login } from "../controllers/auth.controller.js";

const router = Router();

// login
router.post("/login", login);

// register
router.post("/signup", signup);


export default router;
