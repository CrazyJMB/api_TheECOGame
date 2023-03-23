// Conexion a la BD
const db = require("../database/database");

const getQuestions = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM preguntas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM preguntas where id_pregunta = ?",
      [id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getQuestions,
  getQuestion,
};
