// Conexion a la BD
const db = require("../services/database");

require("dotenv").config();

const path = require("path");
const fs = require("fs");

const { handleErrorResponse } = require("../util/handleError");

const getUser = async (req, res) => {
  try {
    const { email } = req.query;

    const [rows] = await db.pool.query(
      "SELECT * FROM user WHERE email LIKE ?",
      [email]
    );
    if (rows.length <= 0) {
      return handleErrorResponse(res, "User not found", 404);
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    handleErrorResponse(res, error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, surname, username, password, email } = req.body;

    if (isEmpty(username)) {
      return handleErrorResponse(res, "The username can not be empty");
    } else if (isEmpty(password)) {
      return handleErrorResponse(res, "The password can not be empty");
    } else if (isEmpty(email)) {
      return handleErrorResponse(res, "The email can not be empty");
    }

    const [rows] = await db.pool.query(
      "INSERT INTO `user` (`username`, `name`, `surname`, `password`, `email`) VALUES (?, ?, ?, ?, ?);",
      [username, name, surname, password, email]
    );

    res.json(rows);
  } catch (error) {
    console.error(error);
    handleErrorResponse(res, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, surname, username, password, email } = req.body;

    if (isEmpty(username)) {
      return handleErrorResponse(res, "The username can not be empty");
    } else if (isEmpty(password)) {
      return handleErrorResponse(res, "The password can not be empty");
    } else if (isEmpty(email)) {
      return handleErrorResponse(res, "The email can not be empty");
    }

    const [rows] = await db.pool.query(
      "UPDATE `user` SET username = ?, name = ?, surname = ?, password = ?, email = ? where id = ?;",
      [username, name, surname, password, email, userId]
    );

    if (rows.affectedRows == 1) {
      res.send({ message: "Information updated" });
    }
    res.json(rows);
  } catch (error) {
    console.error(error);
    handleErrorResponse(res, error);
  }
};

const checkIfUsernameExist = async (req, res) => {
  try {
    const { username } = req.query;

    if (isEmpty(username))
      return handleErrorResponse(res, "Username not indicated", 400);

    const [rows] = await db.pool.query(
      "SELECT * FROM user WHERE username LIKE ?",
      [username]
    );
    if (rows.length > 0) {
      return handleErrorResponse(res, "Username exists", 404);
    }
    res.json({ message: "Username available" });
  } catch (error) {
    console.error(error);
    handleErrorResponse(res, error);
  }
};

const checkIfEmailExist = async (req, res) => {
  try {
    const { email } = req.query;

    if (isEmpty(email))
      return handleErrorResponse(res, "Email not indicated", 400);

    const [rows] = await db.pool.query(
      "SELECT * FROM user WHERE email LIKE ?",
      [email]
    );
    if (rows.length > 0) {
      return handleErrorResponse(res, "Email exists", 404);
    }
    res.json({ message: "Email available" });
  } catch (error) {
    console.error(error);
    handleErrorResponse(res, error);
  }
};

const checkPassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;

    if (isEmpty(password))
      return handleErrorResponse(res, "Password not indicated", 400);

    const [rows] = await db.pool.query(
      "SELECT password FROM user WHERE id LIKE ?",
      [userId]
    );

    if (rows.length <= 0) {
      return handleErrorResponse(res, "User not found", 404);
    }

    const storedPassword = rows[0].password;

    const isMatch = password === storedPassword;
    if (!isMatch) {
      return handleErrorResponse(res, "Invalid password", 401);
    }

    res.json({ message: "Password is correct" });
  } catch (error) {
    console.error(error);
    handleErrorResponse(res);
  }
};

// Avatar
const updateAvatar = async (req, res) => {
  try {
    if (!req.files) return handleErrorResponse(res, "No image submitted", 400);

    const { image } = req.files;
    const { userId } = req.params;

    const validUserId = parseInt(userId);
    if (isNaN(validUserId)) {
      return handleErrorResponse(res, "Invalid user ID", 400);
    }

    const dir = path.join(
      __dirname,
      "../",
      "../",
      "/uploads",
      validUserId.toString()
    );

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const existingAvatar = await db.pool.query(
      "SELECT avatar FROM `user` WHERE id = ?",
      [validUserId]
    );

    if (existingAvatar && existingAvatar.length > 0) {
      const oldAvatarPath = existingAvatar[0].avatar;

      if (oldAvatarPath && fs.existsSync(oldAvatarPath)) {
        fs.unlinkSync(oldAvatarPath);
      }
    }

    const imageExtension = path.extname(image.name);
    const newAvatarPath = path.join(dir, `avatar${imageExtension}`);
    image.mv(newAvatarPath);

    const url = `${process.env.BASE_URL}/uploads/${validUserId.toString()}`;

    await db.pool.query("UPDATE `user` SET avatar = ? WHERE id = ?", [
      url,
      validUserId,
    ]);

    return res.json({ message: "Image saved" });
  } catch (error) {
    console.error(error);
    return handleErrorResponse(res);
  }
};

function isEmpty(str) {
  return !str || str.length === 0;
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  checkIfUsernameExist,
  checkIfEmailExist,
  checkPassword,
  updateAvatar,
};
