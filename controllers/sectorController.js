import sequelize from "../database/db.js";

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
