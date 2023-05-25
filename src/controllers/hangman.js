// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getRandomHangmanForSpecificUser = async (req, res) => {
  try {
    const { userId, dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT h.*, (SELECT ho.ods_id FROM hangman_ods ho WHERE ho.hangman_id = h.challenge_details_id LIMIT 1 ) AS ods_id FROM hangman h where difficulty = ? and challenge_details_id not in (Select challenge_id from game_challenge where challenge_type like 'HANGMAN' and  game_id in (Select user_id from game where user_id = ?)) ORDER by Rand() limit 1",
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

module.exports = {
  getRandomHangmanForSpecificUser,
};
