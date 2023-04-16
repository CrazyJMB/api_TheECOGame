// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getStatistic = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "select * from statistics where user_id = ?",
      [userId]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(res, "User have no statistics", 404);
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res);
  }
};

//TODO
const createStatistics = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query("", [userId]);
    if (rows.length <= 0) {
      return handleErrorResponse(res, "No games played", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};

//TODO
const updateStatistics = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query("", [userId]);
    if (rows.length <= 0) {
      return handleErrorResponse(res, "No games played", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};

module.exports = {
  getStatistic,
  createStatistics,
  updateStatistics,
};
