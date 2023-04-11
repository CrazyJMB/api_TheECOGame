// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const getGames = async (req, res) => {
  try {
    const [result] = await db.pool.query("SELECT * FROM game");
    res.json(result);
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.pool.query(
      "SELECT * FROM game WHERE user_id = ?",
      [id]
    );
    if (result.length <= 0) {
      return handleErrorResponse(res, "User have no games", 404);
    }
    res.json(result);
  } catch (error) {
    handleErrorResponse(res);
  }
};

// TODO: Create game
const createGame = async (req, res) => {
  const {
    user_id,
    state = 1,
    score = 0,
    start_date = Date.now(),
    end_date = null,
  } = req.body;

  const sql = `INSERT INTO game (user_id, state, score, start_date, end_date)
    VALUES (?, ?, ?, ?, ?)`;

  const values = [user_id, state, score, start_date, end_date];

  try {
    const [result] = await db.pool.query(sql, values);
    console.log(`User with id ${user_id} inserted into game table`);
    res.json(result);
  } catch (error) {
    handleErrorResponse(res);
  }
};

module.exports = {
  getGames,
  getGameById,
  createGame,
};
