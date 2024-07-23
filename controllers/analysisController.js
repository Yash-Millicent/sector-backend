import sequelize from "../database/db.js";

export const getAreaGraph = async (req, res) => {
  try {
    const index = req.params.index;
    const type = req.params.type;
    const sectorId = req.params.sectorID;
    const industryId = req.params.industryID;
    console.log("areagraph", index, type, sectorId, industryId);

    sequelize
      .query(
        "CALL `sp_get_index-overview_v1`(:index, :type, :sectorId, :industryId)",
        {
          replacements: { index, type, sectorId, industryId },
        }
      )
      .then(function (graphData) {
        res.json(graphData);
        // console.log(graphData);
      });
  } catch (error) {
    console.error("Error getting graph data:", error);
    res.status(500).json({ message: error });
  }
};
