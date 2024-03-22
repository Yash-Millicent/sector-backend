import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import sectorModel from "./SectorModel.js";

const industryModel = sequelize.define(
  "Industry",
  {
    industryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "IndustryId",
    },
    industryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "IndustryName",
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "ShortName",
    },
    sectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "SectorId",
    },
    deleteFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "DeleteFlag",
    },
  },
  {
    tableName: "industrymaster",
  }
);

(async () => {
  try {
    await industryModel.sync();
    console.log("Industry model synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing Industry model:", error);
  }
})();

// industryModel.belongsTo(sectorModel, { foreignKey: "sectorId" });
industryModel.belongsTo(sectorModel, { foreignKey: "sectorId" });

export default industryModel;
