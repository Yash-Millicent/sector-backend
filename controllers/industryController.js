import sequelize from "../database/db.js";
import IndustryModel from "../models/IndustryModel.js";
import { Op, QueryTypes, Sequelize } from "sequelize";

export const getIndustryList = async (req, res) => {
  try {
    // const sectorId = req.params.id;
    // const industries = await IndustryModel.findAll({
    //   where: { sectorId: id, deleteFlag: false },
    // });
    const sectorId = req.params.id;

    sequelize
      .query("CALL `sp_get_industrymaster_by-sector-id_v1`(:sectorId)", {
        replacements: { sectorId },
        // type: Sequelize.QueryTypes.SELECT,
      })
      .then(function (industries) {
        res.json(industries);
      });
    // res.json(industries);
  } catch (error) {
    console.error("Error getting industries:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getIndustryNameList = async (industryId) => {
  try {
    // Split the industryId string into an array of integers
    const industryIds = industryId.split(",").map((id) => parseInt(id.trim()));

    const companies = await CompanyModel.findAll({
      where: {
        industryId: {
          [Op.in]: industryIds,
        },
        deleteFlag: false,
      },
      attributes: ["industryName"], // Select only the industryName attribute
      raw: true, // Get raw data to easily extract distinct values
    });
    return companies;
  } catch (error) {
    console.error("Error fetching industry names:", error);
    throw error; // Forward the error to the calling function
  }
};
