// routes/sectorRoutes.js

import express from "express";
import {
  getAreaGraph,
  getIndustryList,
} from "../controllers/industryController.js";

const router = express.Router();

router.get("/:id", getIndustryList);
router.get("/areagraph/:index/:type/:sectorID/:industryID", getAreaGraph);

export default router;
