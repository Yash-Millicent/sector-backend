import sequelize from "../database/db.js";

// Get list of sectors
export const getDetailsBySectorOrIndices = async (req, res) => {
  try {
    const headerType = req.params.headerType;
    const sectorOrIndices = req.params.sectorOrIndices;
    const parts = sectorOrIndices.split(/[-,:]/);
    // Extract the parts
    const selectedType = parts[0];
    const number = parts[1];
    let sectorId = 0;
    let indices = 0;
    if (selectedType === "sector") {
      sectorId = number;
    }
    if (selectedType === "index") {
      indices = number;
    }
    sequelize
      .query(
        "CALL `sp_get_scanner_overview_v1`(:headerType,:sectorId, :indices)",
        {
          replacements: { headerType, sectorId, indices },
        }
      )
      .then(function (companies) {
        res.json(companies);
      });
  } catch (error) {
    console.error("Error in getDetailsBySectorOrIndices:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
