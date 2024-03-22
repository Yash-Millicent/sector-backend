// routes/sectorRoutes.js

import express from "express";
import { getIndustryList } from "../controllers/industryController.js";

const router = express.Router();

router.get("/:id", getIndustryList);

export default router;
