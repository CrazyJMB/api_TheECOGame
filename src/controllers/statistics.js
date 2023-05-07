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

const updateWinCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET win_count = win_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const updateLostCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET lose_count = win_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

const updateQuitCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET quit_count = win_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

const updateTimeInGame = async (req, res) => {
  try {
    const { userId } = req.params;
    const { time } = req.body;

    const [rows] = await db.pool.query(
      "UPDATE statistics SET time_ingame = time_ingame + ? WHERE (user_id = ?);",
      [time, userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

const updateQuestionCorrectCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET question_correct_count = question_correct_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

const updateQuestionFailedCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET question_failed_count = question_failed_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

const updateHangmanCorrectCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET hangman_correct_count = hangman_correct_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

const updateHangmanFailedCount = async (req, res) => {
  try {
    const { userId } = req.params;
    const [rows] = await db.pool.query(
      "UPDATE statistics SET hangman_failed_count = hangman_failed_count + 1 WHERE (user_id = ?);",
      [userId]
    );

    res.send({ message: "Stadistics updated" });
  } catch (error) {
    handleErrorResponse(res);
  }
};

module.exports = {
  getStatistic,
  updateWinCount,
  updateLostCount,
  updateQuitCount,
  updateTimeInGame,
  updateQuestionCorrectCount,
  updateQuestionFailedCount,
  updateHangmanCorrectCount,
  updateHangmanFailedCount,
};
