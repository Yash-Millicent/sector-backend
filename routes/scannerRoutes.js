import express from "express";
import {
  getDetailsBySectorOrIndices,
  getTechnicalTableData,
} from "../controllers/scannerController.js";

const router = express.Router();

router.get(
  "/id/:headerType/:type/:sectorOrIndices/:exch",
  getDetailsBySectorOrIndices
);
router.get("/technical-data", getTechnicalTableData);

export default router;
