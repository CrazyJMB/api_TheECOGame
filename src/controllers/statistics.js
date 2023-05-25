// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getStatistic = async (req, res) => {
  try {
    const { userId } = req.params;
    const sql = `SELECT s.*, 
      ods1.count_ocurrences AS ODS_1,
      ods2.count_ocurrences AS ODS_2,
      ods3.count_ocurrences AS ODS_3,
      ods4.count_ocurrences AS ODS_4,
      ods5.count_ocurrences AS ODS_5,
      ods6.count_ocurrences AS ODS_6,
      ods7.count_ocurrences AS ODS_7,
      ods8.count_ocurrences AS ODS_8,
      ods9.count_ocurrences AS ODS_9,
      ods10.count_ocurrences AS ODS_10,
      ods11.count_ocurrences AS ODS_11,
      ods12.count_ocurrences AS ODS_12,
      ods13.count_ocurrences AS ODS_13,
      ods14.count_ocurrences AS ODS_14,
      ods15.count_ocurrences AS ODS_15,
      ods16.count_ocurrences AS ODS_16,
      ods17.count_ocurrences AS ODS_17
      FROM statistics s
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 1
      ) ods1 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 2
      ) ods2 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 3
      ) ods3 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 4
      ) ods4 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 5
      ) ods5 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 6
      ) ods6 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 7
      ) ods7 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 8
      ) ods8 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 9
      ) ods9 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 10
      ) ods10 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 11
      ) ods11 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 12
      ) ods12 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 13
      ) ods13 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 14
      ) ods14 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 15
      ) ods15 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 16
      ) ods16 ON 1 = 1
      LEFT JOIN (
      SELECT COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE g.user_id = ?
      AND qo.ods_id = 17
      ) ods17 ON 1 = 1
      WHERE s.user_id = ?;
      `;

    const values = [
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
      userId,
    ];

    const [rows] = await db.pool.query(sql, values);

    if (rows.length <= 0) {
      return handleErrorResponse(res, "User have no statistics", 404);
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res, error);
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
