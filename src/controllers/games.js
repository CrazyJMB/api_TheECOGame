// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

const createGame = async (req, res) => {
  try {
    const { user_id, state = 1 } = req.body;

    const sql = `INSERT INTO game (user_id, state) VALUES (?, ?)`;

    const values = [user_id, state];

    const [rows] = await db.pool.query(sql, values);

    if (rows.affectedRows == 1) {
      res.send({ id: rows.insertId });
    } else {
      handleErrorResponse(res, "Failed to create game");
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.pool.query("SELECT * FROM game WHERE user_id = ?", [
      id,
    ]);
    if (rows.length <= 0) {
      return handleErrorResponse(res, "User have no games", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const updateScore = async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;

    if (isEmpty(score)) {
      handleErrorResponse(res, "Score can not be null", 404);
    }

    // Actualizar la puntuación en la tabla 'game'
    const [gameRows] = await db.pool.query(
      "UPDATE game SET score = ? WHERE (id = ?);",
      [score, id]
    );

    // Verificar si se actualizó la puntuación en la tabla 'game'
    if (gameRows.affectedRows === 1) {
      // Obtener el user_id de la partida actualizada
      const [gameDataRows] = await db.pool.query(
        "SELECT user_id FROM game WHERE id = ?;",
        [id]
      );

      if (gameDataRows.length === 1) {
        const userId = gameDataRows[0].user_id;

        // Actualizar la puntuación en la tabla 'statistics' del usuario
        const [statisticsRows] = await db.pool.query(
          "UPDATE statistics SET score = score + ? WHERE user_id = ?;",
          [score, userId]
        );

        // Verificar si se actualizó la puntuación en la tabla 'statistics'
        if (statisticsRows.affectedRows === 1) {
          res.send({ message: "Score saved" });
        } else {
          // Si no se actualizó la puntuación en la tabla 'statistics', manejar el error
          handleErrorResponse(
            res,
            "Failed to update score in statistics table"
          );
        }
      } else {
        // Si no se encontró la partida correspondiente, manejar el error
        handleErrorResponse(res, "Game not found");
      }
    } else {
      // Si no se actualizó la puntuación en la tabla 'game', manejar el error
      handleErrorResponse(res, "Failed to update score in game table");
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const addChallengeToGame = async (req, res) => {
  try {
    const { id } = req.params;
    const { challenge_id, challenge_type } = req.body;

    const numericId = parseInt(id, 10); // Convertir a número

    const sql = `INSERT INTO game_challenge (game_id, challenge_id, challenge_type) VALUES (?, ?, ?)`;
    const values = [numericId, challenge_id, challenge_type];

    console.log(values);

    const [rows] = await db.pool.query(sql, values);
    if (rows.affectedRows == 1) {
      res.send({ message: "Challenge added to the game" });
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

const setGameEnd = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.pool.query(
      "UPDATE game SET state = 3, end_date = ? WHERE (id = ?);",
      [Date.now(), id]
    );
    if (rows.affectedRows == 1) {
      res.send({ message: "Game ended" });
    }
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

function isEmpty(str) {
  return !str || str.length === 0;
}

module.exports = {
  createGame,
  getGameById,
  updateScore,
  addChallengeToGame,
  setGameEnd,
};
