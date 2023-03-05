import { createPool } from "mysql2";

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  port: 3000,
});

export const getConnection = () => {
  return pool;
};