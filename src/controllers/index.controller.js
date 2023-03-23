// Conexion a la BD
const pool = require("../database/database");

const ping = (req, res) => res.send("pong");

module.exports = {
  ping,
};
