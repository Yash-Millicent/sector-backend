import sequelize from "../database/db.js";

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

export const getAreaGraph = async (req, res) => {
  try {
    const sectorId = req.params.id;
    console.log("areagraph", sectorId);

    sequelize
      .query("CALL `sp_get_paperindex_v1`(:sectorId)", {
        replacements: { sectorId },
      })
      .then(function (graphData) {
        res.json(graphData);
        console.log(graphData);
      });
  } catch (error) {
    console.error("Error getting graph data:", error);
    res.status(500).json({ message: error });
  }
};
