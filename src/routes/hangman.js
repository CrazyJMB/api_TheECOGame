const { Router } = require("express");
const questionController = require("../controllers/hangman");

const router = Router();

router.get(
  "/:dif/:userId/",
  questionController.getRandomHangmanForSpecificUser
);

module.exports = router;
