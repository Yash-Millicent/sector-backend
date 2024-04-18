import express from "express";
import {
  getDetailsBySectorOrIndices,
  getPeriodicHighLow,
  getTechnicalTableData,
} from "../controllers/scannerController.js";

const router = express.Router();

router.get("/:tableTab/:sectorOrIndices", getPeriodicHighLow);
router.get("/:headerType/:sectorOrIndices", getDetailsBySectorOrIndices);
router.get("/technical-data", getTechnicalTableData);
export default router;
