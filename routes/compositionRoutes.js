// routes/sectorRoutes.js

import express from "express";
import {
  getCompanyList,
  getIndustryIndex,
  getIndustryList,
  getIndustryMaster,
} from "../controllers/compositionController.js";

const router = express.Router();

router.get("/:id", getIndustryList);
router.get("/data/industryList", getIndustryMaster);
router.get("/:sectorId/:industryId", getCompanyList);
router.get("/industryIndex/sector/:sectorName", getIndustryIndex);

export default router;
