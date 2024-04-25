import sequelize from "../database/db.js";

// Get list of sectors
export const getDetailsBySectorOrIndices = async (req, res) => {
  try {
    const headerType = req.params.headerType;
    const sectorOrIndices = req.params.sectorOrIndices;
    console.log("header", headerType, sectorOrIndices);
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
    res.status(500).json({ message: error });
  }
};

// export const getTopGainers = async (req, res) => {
//   try {
//     const sectorOrIndices = req.params.sectorOrIndices;
//     console.log("sectorOrIndices", sectorOrIndices);
//     const parts = sectorOrIndices.split(/[-,:]/);
//     // Extract the parts
//     const selectedType = parts[0];
//     const number = parts[1];
//     let sectorId = 0;
//     let indices = 0;
//     if (selectedType === "sector") {
//       sectorId = number;
//     }
//     if (selectedType === "index") {
//       indices = number;
//     }
//     sequelize
//       .query("CALL `sp_get_top-gainers_v1`(:sectorId, :indices)", {
//         replacements: { sectorId, indices },
//       })
//       .then(function (companies) {
//         res.json(companies);
//       });
//   } catch (error) {
//     console.error("Error in getTopGainers:", error);
//     res.status(500).json({ message: error });
//   }
// };

//Get Periodic high
export const getPeriodicHighLow = async (req, res) => {
  try {
    const tableTab = req.params.tableTab;
    const sectorOrIndices = req.params.sectorOrIndices;
    console.log("header", tableTab, sectorOrIndices);
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
        "CALL `sp_get_periodichighlow-overview_v1`(:tableTab, :sectorId, :indices)",
        {
          replacements: { tableTab, sectorId, indices },
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
