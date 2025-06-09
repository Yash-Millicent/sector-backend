import sequelize from "../database/db.js";

// Get list of sectors
export const getDetailsBySectorOrIndices = async (req, res) => {
  try {
    const headerType = req.params.headerType;
    const type = req.params.type;
    const sectorOrIndices = req.params.sectorOrIndices;
    const exch = req.params.exch;
    console.log("header", headerType, type, sectorOrIndices, exch);
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
        "CALL `sp_get_scanner_overview_v1`(:headerType, :type, :sectorId, :indices, :exch)",
        {
          replacements: {
            headerType,
            type,
            sectorId,
            indices,
            exch,
          },
        }
      )
      .then(function (companies) {
        res.json(companies);
      });
  } catch (error) {
    console.error("Error in getDetailsBySectorOrIndices:", error);
    res.status(500).json({ message: error });
  }
};

export const getRSICrossover = async (req, res) => {
  try {
    sequelize
      .query("CALL `Get_rsi_record_overbought_oversold_v1`()")
      .then(function (companies) {
        res.json(companies);
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTechnicalTableData = async (req, res) => {
  try {
    sequelize
      .query("CALL `sp_get_technical-table-data`()")
      .then(function (technical) {
        res.json(technical);
      });
  } catch (error) {
    console.error("Error getting getTechnicalTableData:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
