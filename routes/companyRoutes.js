import express from "express";
import { getCompanyList } from "../controllers/companyController.js";

const router = express.Router();

router.get("/:sectorId/:industryId", getCompanyList);

export default router;
