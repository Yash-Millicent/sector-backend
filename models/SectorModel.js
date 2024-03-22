import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const sectorModel = sequelize.define(
  "Sector",
  {
    sectorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "SectorId",
    },
    sectorName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "SectorName",
    },
    ShortName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ShortName",
    },
    deleteFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "DeleteFlag",
    },
  },
  {
    tableName: "sectormaster",
  }
);

(async () => {
  try {
    await sectorModel.sync();
    console.log("Sector model synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing Sector model:", error);
  }
})();

export default sectorModel;
