import express from "express";
import { getDetailsBySectorOrIndices } from "../controllers/scannerController.js";

const router = express.Router();

router.get("/:headerType/:sectorOrIndices", getDetailsBySectorOrIndices);

export default router;
