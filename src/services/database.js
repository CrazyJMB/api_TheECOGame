const { createPool } = require("mysql2/promise");
require("dotenv").config();

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.PORT,
});

module.exports = {
  pool,
};
