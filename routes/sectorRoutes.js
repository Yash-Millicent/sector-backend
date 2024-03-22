// routes/sectorRoutes.js

import express from "express";
import {
  getSectorById,
  updateSectorById,
  getSectorList,
  updateDeleteFlag,
  createSector,
} from "../controllers/sectorController.js";

const router = express.Router();

router.get("/byid/:id", getSectorById);
router.put("/updatebyid/:id", updateSectorById);
router.get("/list", getSectorList);
router.put("/delete/:id", updateDeleteFlag);
router.post("/add", createSector);

export default router;
