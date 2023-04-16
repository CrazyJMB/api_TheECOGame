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
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getRandomQuestionForSpecificUser = async (req, res) => {
  try {
    const { userId, dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM question where difficulty = ? and challenge_details_id not in (Select challenge_id from game_challenge where game_id in (Select user_id from game where user_id = ?)) ORDER by Rand() limit 1",
      [dif, userId]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(res, "Question not found", 404);
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getQuestionsByDifficult = async (req, res) => {
  try {
    const { dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM question where difficulty = ?",
      [dif]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(
        res,
        "No questions with the specific difficulty",
        404
      );
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getRandomQuestionByDifficult = async (req, res) => {
  try {
    const { dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM question where difficulty = ? ORDER BY RAND() LIMIT 1",
      [dif]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(
        res,
        "No question with the specific difficulty",
        404
      );
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    handleErrorResponse(res);
  }
};
module.exports = {
  getQuestions,
  getQuestion,
  getRandomQuestionForSpecificUser,
  getQuestionsByDifficult,
  getRandomQuestionByDifficult,
};
