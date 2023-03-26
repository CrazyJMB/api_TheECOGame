// Conexion a la BD
const db = require("../database/database");

const { handleErrorResponse } = require("../util/handleError");

const getUsers = async (req, res) => {
  try {
    const [rows] = await db.pool.query("SELECT * FROM user");
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getUser = async (req, res) => {
  try {
    const { user } = req.params;
    const [rows] = await db.pool.query("SELECT * FROM user WHERE user LIKE ?", [
      user,
    ]);
    if (rows.length <= 0) {
      return handleErrorResponse(res, "User not found", 404);
    }
    res.json(rows);
  } catch (error) {
    handleErrorResponse(res);
  }
};

// TODO: Create user
const createUser = async (req, res) => {
  try {
  } catch (error) {
    handleErrorResponse(res);
  }
};

// TODO: Update user
const updateUser = async (req, res) => {
  try {
  } catch (error) {
    handleErrorResponse(res);
  }
};

// TODO: Delete user
const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    handleErrorResponse(res);
  }
};

const getPassword = async (req, res) => {
  try {
    const { user } = req.params;
    const [rows] = await db.pool.query(
      "SELECT password FROM user WHERE user LIKE ?",
      [user]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(res, "User not found", 404);
    }
    res.json(rows[0]);
  } catch (error) {
    handleErrorResponse(res);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getPassword,
};
