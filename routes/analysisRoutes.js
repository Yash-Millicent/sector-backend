import express from "express";
import { getAreaGraph } from "../controllers/analysisController.js";

const router = express.Router();

router.get("/areagraph/:index/:type/:sectorID/:industryID", getAreaGraph);

export default router;
