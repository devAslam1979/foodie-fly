import express from "express";
import { register, profile } from "../controllers/userController";
const router = express.Router();

router.get("/profile", profile);
router.post("/register", register);

export default router;
