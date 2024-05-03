import express from "express";
import {
  getDetailsBySectorOrIndices,
  getTechnicalTableData,
  // getTopGainers,
} from "../controllers/scannerController.js";

const router = express.Router();

// router.get("/:tableTab/:sectorOrIndices", getPeriodicHighLow);
router.get(
  "/id/:headerType/:type/:sectorOrIndices",
  getDetailsBySectorOrIndices
);
router.get("/technical-data", getTechnicalTableData);

export default router;
