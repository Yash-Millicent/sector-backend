import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./database/db.js";
import sector from "./routes/sectorRoutes.js";
import composition from "./routes/compositionRoutes.js";
import scanners from "./routes/scannerRoutes.js";
import login from "./routes/authRoutes.js";
import indicators from "./routes/indicatorRoutes.js";
import analysis from "./routes/analysisRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["PUT", "POST", "GET", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.set("serverTimeout", 120000);

app.use("/api", login);
app.use("/api/sectors", sector);
app.use("/api/analysis", analysis);
app.use("/api/composition", composition);
app.use("/api/scanners", scanners);
app.use("/api/indicators", indicators);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on : ${PORT}`));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// export default app;
