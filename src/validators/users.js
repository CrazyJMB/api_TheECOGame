const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateObjectDataCreate = [
  check("username").exists().notEmpty(),
  check("name").exists().notEmpty(),
  check("surname").exists().notEmpty().isMongoId(),
  check("password").exists().notEmpty().isURL(),
  check("email").exists().notEmpty(),
  check("score").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
