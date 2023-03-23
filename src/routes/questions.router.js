const { Router } = require("express");
const preguntas = require("../controllers/questions.controller");

const router = Router();

router.get("/", preguntas.getQuestions);
router.get("/:user", preguntas.getQuestion);

module.exports = router;
