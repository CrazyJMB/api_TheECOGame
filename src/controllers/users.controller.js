// Conexion a la BD
const db = require("../database/database");

const getUsers = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM participante");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getUser = async (req, res) => {
  try {
    const { user } = req.params;
    const [rows] = await db.pool.query(
      "SELECT * FROM participante WHERE user LIKE ?",
      [user]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getPassword = async (req, res) => {
  try {
    const { user } = req.params;
    const [rows] = await db.pool.query(
      "SELECT contraseña FROM participante WHERE user LIKE ?",
      [user]
    );
    if (rows.length <= 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getUsers,
  getUser,
  getPassword,
};
