import express from "express";
import { getLineChartSma } from "../controllers/indicatorsController.js";

const router = express.Router();

router.get("/:sma/:index", getLineChartSma);

export default router;
