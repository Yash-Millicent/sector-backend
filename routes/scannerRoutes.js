import express from "express";
import {
  getDetailsBySectorOrIndices,
  getRSICrossover, 
  getTechnicalTableData,
} from "../controllers/scannerController.js";

const router = express.Router();

router.get(
  "/id/:headerType/:type/:sectorOrIndices/:exch",
  getDetailsBySectorOrIndices
);
router.get("/technical-data", getTechnicalTableData);
router.get("/get-rsi-crossover", getRSICrossover);

export default router;
