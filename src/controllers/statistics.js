// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getStatistic = async (req, res) => {
  try {
    const { userId } = req.params;
    const sql = `SELECT s.*,
      COALESCE(ods1_questions.count_ocurrences, 0) + COALESCE(ods1_hangman.count_ocurrences, 0) AS ODS_1,
      COALESCE(ods2_questions.count_ocurrences, 0) + COALESCE(ods2_hangman.count_ocurrences, 0) AS ODS_2,
      COALESCE(ods3_questions.count_ocurrences, 0) + COALESCE(ods3_hangman.count_ocurrences, 0) AS ODS_3,
      COALESCE(ods4_questions.count_ocurrences, 0) + COALESCE(ods4_hangman.count_ocurrences, 0) AS ODS_4,
      COALESCE(ods5_questions.count_ocurrences, 0) + COALESCE(ods5_hangman.count_ocurrences, 0) AS ODS_5,
      COALESCE(ods6_questions.count_ocurrences, 0) + COALESCE(ods6_hangman.count_ocurrences, 0) AS ODS_6,
      COALESCE(ods7_questions.count_ocurrences, 0) + COALESCE(ods7_hangman.count_ocurrences, 0) AS ODS_7,
      COALESCE(ods8_questions.count_ocurrences, 0) + COALESCE(ods8_hangman.count_ocurrences, 0) AS ODS_8,
      COALESCE(ods9_questions.count_ocurrences, 0) + COALESCE(ods9_hangman.count_ocurrences, 0) AS ODS_9,
      COALESCE(ods10_questions.count_ocurrences, 0) + COALESCE(ods10_hangman.count_ocurrences, 0) AS ODS_10,
      COALESCE(ods11_questions.count_ocurrences, 0) + COALESCE(ods11_hangman.count_ocurrences, 0) AS ODS_11,
      COALESCE(ods12_questions.count_ocurrences, 0) + COALESCE(ods12_hangman.count_ocurrences, 0) AS ODS_12,
      COALESCE(ods13_questions.count_ocurrences, 0) + COALESCE(ods13_hangman.count_ocurrences, 0) AS ODS_13,
      COALESCE(ods14_questions.count_ocurrences, 0) + COALESCE(ods14_hangman.count_ocurrences, 0) AS ODS_14,
      COALESCE(ods15_questions.count_ocurrences, 0) + COALESCE(ods15_hangman.count_ocurrences, 0) AS ODS_15,
      COALESCE(ods16_questions.count_ocurrences, 0) + COALESCE(ods16_hangman.count_ocurrences, 0) AS ODS_16,
      COALESCE(ods17_questions.count_ocurrences, 0) + COALESCE(ods17_hangman.count_ocurrences, 0) AS ODS_17
      FROM statistics s
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 1
      GROUP BY g.user_id
      ) ods1_questions ON s.user_id = ods1_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 1
      GROUP BY g.user_id
      ) ods1_hangman ON s.user_id = ods1_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 2
      GROUP BY g.user_id
      ) ods2_questions ON s.user_id = ods2_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 2
      GROUP BY g.user_id
      ) ods2_hangman ON s.user_id = ods2_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 3
      GROUP BY g.user_id
      ) ods3_questions ON s.user_id = ods3_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 3
      GROUP BY g.user_id
      ) ods3_hangman ON s.user_id = ods3_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 4
      GROUP BY g.user_id
      ) ods4_questions ON s.user_id = ods4_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 4
      GROUP BY g.user_id
      ) ods4_hangman ON s.user_id = ods4_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 5
      GROUP BY g.user_id
      ) ods5_questions ON s.user_id = ods5_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 5
      GROUP BY g.user_id
      ) ods5_hangman ON s.user_id = ods5_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 6
      GROUP BY g.user_id
      ) ods6_questions ON s.user_id = ods6_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 6
      GROUP BY g.user_id
      ) ods6_hangman ON s.user_id = ods6_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 7
      GROUP BY g.user_id
      ) ods7_questions ON s.user_id = ods7_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 7
      GROUP BY g.user_id
      ) ods7_hangman ON s.user_id = ods7_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 8
      GROUP BY g.user_id
      ) ods8_questions ON s.user_id = ods8_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 8
      GROUP BY g.user_id
      ) ods8_hangman ON s.user_id = ods8_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 9
      GROUP BY g.user_id
      ) ods9_questions ON s.user_id = ods9_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 9
      GROUP BY g.user_id
      ) ods9_hangman ON s.user_id = ods9_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 10
      GROUP BY g.user_id
      ) ods10_questions ON s.user_id = ods10_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 10
      GROUP BY g.user_id
      ) ods10_hangman ON s.user_id = ods10_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 11
      GROUP BY g.user_id
      ) ods11_questions ON s.user_id = ods11_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 11
      GROUP BY g.user_id
      ) ods11_hangman ON s.user_id = ods11_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 12
      GROUP BY g.user_id
      ) ods12_questions ON s.user_id = ods12_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 12
      GROUP BY g.user_id
      ) ods12_hangman ON s.user_id = ods12_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 13
      GROUP BY g.user_id
      ) ods13_questions ON s.user_id = ods13_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 13
      GROUP BY g.user_id
      ) ods13_hangman ON s.user_id = ods13_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 14
      GROUP BY g.user_id
      ) ods14_questions ON s.user_id = ods14_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 14
      GROUP BY g.user_id
      ) ods14_hangman ON s.user_id = ods14_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 15
      GROUP BY g.user_id
      ) ods15_questions ON s.user_id = ods15_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 15
      GROUP BY g.user_id
      ) ods15_hangman ON s.user_id = ods15_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 16
      GROUP BY g.user_id
      ) ods16_questions ON s.user_id = ods16_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 16
      GROUP BY g.user_id
      ) ods16_hangman ON s.user_id = ods16_hangman.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN question q ON gc.challenge_id = q.challenge_details_id
      JOIN question_ods qo ON q.challenge_details_id = qo.question_id
      WHERE gc.challenge_type = 'QUESTION' AND qo.ods_id = 17
      GROUP BY g.user_id
      ) ods17_questions ON s.user_id = ods17_questions.user_id
      LEFT JOIN (
      SELECT g.user_id, COUNT(*) AS count_ocurrences
      FROM game_challenge gc
      JOIN game g ON gc.game_id = g.id
      JOIN hangman h ON gc.challenge_id = h.challenge_details_id
      JOIN hangman_ods ho ON h.challenge_details_id = ho.hangman_id
      WHERE gc.challenge_type = 'HANGMAN' AND ho.ods_id = 17
      GROUP BY g.user_id
      ) ods17_hangman ON s.user_id = ods17_hangman.user_id
      WHERE s.user_id = ?;
      `;

    const values = [userId];

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
