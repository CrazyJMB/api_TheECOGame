// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getQuestions = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM question");
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query("SELECT * FROM question where id = ?", [
      id,
    ]);
    if (rows.length <= 0) {
      return handleErrorResponse(res, "Question not found", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};

module.exports = {
  getQuestions,
  getQuestion,
};
