import sequelize from "../database/db.js";

export const getIndustryList = async (req, res) => {
  try {
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

export const getIndustryMaster = async (req, res) => {
  console.log("industry masterrrrr");
  try {
    sequelize
      .query("CALL `sp_get_industrymaster_all`")
      .then(function (industryList) {
        res.json(industryList);
        // console.log(graphData);
      });
  } catch (error) {
    console.error("Error getting industry list:", error);
    res.status(500).json({ message: error });
  }
};

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
        res.json(companies);
      });
  } catch (error) {
    console.error("Error getting industries:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getIndustryIndex = async (req, res) => {
  console.log("Industry index");
  try {
    sequelize
      .query("CALL `sp_get_sector_index_live_v1`")
      .then((industryIndex) => res.json(industryIndex));
  } catch (error) {
    console.error("Error getting industry index:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
