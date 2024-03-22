import sequelize from "../database/db.js";
import industryModel from "../models/IndustryModel.js";
import Sector from "../models/SectorModel.js";
import companyModel from "../models/CompanyModel.js";
import { getIndustryIDList } from "./companyController.js";
import { getIndustryNameList } from "./industryController.js";
import { Op, QueryTypes, Sequelize } from "sequelize";

// Get sector by ID
export const getSectorById = async (req, res) => {
  const { id } = req.params;
  try {
    const sector = await Sector.findByPk(id);
    if (!sector) {
      return res.status(404).json({ message: "Sector not found" });
    }
    res.json(sector);
  } catch (error) {
    console.error("Error getting sector by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update sector by ID
export const updateSectorById = async (req, res) => {
  const { id } = req.params;
  const { sectorName, ShortName } = req.body;
  try {
    const [updated] = await Sector.update(
      { sectorName, ShortName },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ message: "Sector not found" });
    }
    res.json({ message: "Sector updated successfully" });
  } catch (error) {
    console.error("Error updating sector:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get list of sectors
export const getSectorList = async (req, res) => {
  try {
    // const sectors = await Sector.findAll();
    sequelize.query("CALL `SP_get_sector_all`").then(function (sectors) {
      res.json(sectors);
    });
    // res.json(sectors);
  } catch (error) {
    console.error("Error getting all sector:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update delete flag of sector
export const updateDeleteFlag = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Sector.update(
      { deleteFlag: true },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ message: "Sector not found" });
    }
    res.json({ message: "Delete flag updated successfully" });
  } catch (error) {
    console.error("Error updating delete flag:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createSector = async (req, res) => {
  const { sectorName, ShortName } = req.body;
  try {
    // Create the sector
    const sector = await Sector.create({ sectorName, ShortName });

    // Respond with the created sector
    res.status(201).json(sector);
  } catch (error) {
    console.error("Error creating sector:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
