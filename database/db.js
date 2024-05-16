import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";

dotenv.config();

const USERNAME = process.env.DB_USERNAME || "user";
const PASSWORD = process.env.DB_PASSWORD || "user";
const HOST = process.env.DB_HOST || "203.212.222.191";
const DATABASE = process.env.DB_DATABASE || "shreeja_v2.0.1";

const CONNECTION_TIMEOUT = 120000;

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
  dialectModule: mysql2,
  storage: DATABASE,
  dialectOptions: {
    connectTimeout: CONNECTION_TIMEOUT,
  },
});

export default sequelize;
