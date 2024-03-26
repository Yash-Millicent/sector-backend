// routes/sectorRoutes.js

import express from "express";
import { getSectorList } from "../controllers/sectorController.js";

const router = express.Router();

router.get("/list", getSectorList);

export default router;
