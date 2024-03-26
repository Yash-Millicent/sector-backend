import sequelize from "../database/db.js";

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
