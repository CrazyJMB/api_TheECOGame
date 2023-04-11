// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getNumChallengesPlayed = async (req, res) => {
  try {
    const { userId, dif } = req.params;
    const [rows] = await db.pool.query(
      "SELECT id, start_date, end_date, (SELECT COUNT(*) FROM game_challenge WHERE game_challenge.game_id = game.id) AS challenge_count FROM game WHERE user_id = 1",
      [userId]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(res, "No games played", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};
