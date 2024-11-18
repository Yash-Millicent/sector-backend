import express from "express";
import {
  getAreaGraph,
  getAreaGraphNew,
} from "../controllers/analysisController.js";

const router = express.Router();

// router.get("/areagraph/:index/:type/:sectorID/:industryID", getAreaGraph);
router.get("/graph/:sectorID/:industryID", getAreaGraphNew);

export default router;
