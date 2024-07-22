// routes/sectorRoutes.js

import express from "express";
import {
  getAreaGraph,
  getIndustryList,
  getIndustryMaster,
} from "../controllers/industryController.js";

const router = express.Router();

router.get("/:id", getIndustryList);
router.get("/areagraph/:index/:type/:sectorID/:industryID", getAreaGraph);
router.get("/data/industryList", getIndustryMaster);

export default router;
