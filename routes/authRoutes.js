// routes/sectorRoutes.js

import express from "express";
import { login, verifyToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/verify_token", verifyToken);

export default router;
