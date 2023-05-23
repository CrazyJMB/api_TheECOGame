// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getRanking = async (req, res) => {
  try {
    const [rows] = await db.pool.query(
      "SELECT u.* FROM user u INNER JOIN statistics s ON u.id = s.user_id ORDER BY s.score DESC LIMIT 10;"
    );
    if (rows.length <= 0) {
      return handleErrorResponse(res, "Error getting ranking", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const getPositionFromSpecificUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const sql =
      "SELECT posicion FROM (SELECT user_id, score, ROW_NUMBER() OVER (ORDER BY score DESC) AS posicion FROM statistics) AS ranked WHERE user_id = ?;";
    const values = [userId];

    const [rows] = await db.pool.query(sql, values);

    if (rows.length <= 0) {
      return handleErrorResponse(res, "Error getting ranking", 404);
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

module.exports = {
  getRanking,
  getPositionFromSpecificUser,
};
