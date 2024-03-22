import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./database/db.js";
import sector from "./routes/sectorRoutes.js";
import industry from "./routes/industryRoutes.js";
import company from "./routes/companyRoutes.js";
import login from "./routes/authRoutes.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api", login);
app.use("/api/sectors", sector);
app.use("/api/industries", industry);
app.use("/api/companies", company);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on : ${PORT}`));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
