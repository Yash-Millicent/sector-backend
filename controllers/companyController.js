import sequelize from "../database/db.js";
import CompanyModel from "../models/companyModel.js";
import { Op, QueryTypes, Sequelize } from "sequelize";

export const getCompanyList = async (req, res) => {
  try {
    const sectorId = req.params.sectorId;
    const industryId = req.params.industryId;

    sequelize
      .query("CALL `sp_get_company_details`(:sectorId, :industryId)", {
        replacements: { sectorId, industryId },
        // type: Sequelize.QueryTypes.SELECT,
      })
      .then(function (companies) {
        // companies.forEach((company) => {
        //   company.percent = Math.floor(Math.random() * (15 - -50 + 1)) + -10;
        // });

        res.json(companies);
      });

    // const companies = await CompanyModel.findAll({
    //   where: { sectorId: sectorId, industryId: industryId, deleteFlag: false },
    // });
    // res.json(companies);
  } catch (error) {
    console.error("Error getting industries:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getIndustryIDList = async (sectorId) => {
  try {
    const companies = await CompanyModel.findAll({
      where: { sectorId: sectorId, deleteFlag: false },
      attributes: ["industryId"], // Select only the industryId attribute
      raw: true, // Get raw data to easily extract distinct values
    });

    // Extract distinct industry IDs
    const distinctIndustryIDs = [
      ...new Set(companies.map((company) => company.industryId)),
    ];

    // Convert distinct industry IDs to a comma-separated string
    const industryIDString = distinctIndustryIDs.join(",");

    return industryIDString;
  } catch (error) {
    console.error("Error fetching industry IDs:", error);
    throw error; // Forward the error to the calling function
  }
};
