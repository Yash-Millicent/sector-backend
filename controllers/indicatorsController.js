import sequelize from "../database/db.js";

export const getLineChartSma = (req, res) => {
  try {
    const sma = req.params.sma;
    const index = req.params.index;

    console.log("sma", sma, index);

    sequelize
      .query("CALL `sp_get_percentage-of-stocks-above_v1`(:sma, :index)", {
        replacements: { sma, index },
      })
      .then((lineChartSma) => {
        res.json(lineChartSma);
      });
  } catch (error) {
    console.error("Error in getLineChartSma:", error);
    res.status(500).json({ message: error });
  }
};
