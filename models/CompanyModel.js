import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import industryModel from "./IndustryModel.js";

const companyModel = sequelize.define(
  "Company",
  {
    companyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "CompanyId",
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "CompanyName",
    },
    sectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "SectorId",
    },
    sectorName: {
      type: DataTypes.STRING,
      field: "SectorName",
    },
    industryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "IndustryId",
    },
    industryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "IndustryName",
    },
    bseScriptCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "BSEScriptCode",
    },
    nseSymbol: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "NSESymbol",
    },
    nseScriptCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "NSEScriptCode",
    },
    percentageChange: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "percentage_change",
    },
    lastTradedPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "last_trade_price",
    },
    deleteFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "DeleteFlag",
    },
  },
  {
    tableName: "companymaster",
  }
);

(async () => {
  try {
    await companyModel.sync();
    console.log("Company model synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing Company model:", error);
  }
})();

companyModel.belongsTo(industryModel, { foreignKey: "industryId" });

export default companyModel;
