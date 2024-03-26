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
app.use(express.json());
app.use(
  cors({
    // origin: ["https://sector-analyser.netlify.app"],
    origin: true,
    methods: ["PUT", "POST", "GET", "DELETE", "PATCH"],
    credentials: true,
  })
);

// app.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//   );

//   // Proceed to other route handling
// });

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
