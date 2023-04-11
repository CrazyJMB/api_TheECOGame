const { Router } = require("express");
const challengeController = require("../controllers/challenges");

const router = Router();

// Devuelve un reto específico
router.get("/:id", challengeController.getChallenge);

// Devuelve los restos especificos a una partida
router.get("/:id", challengeController.getChallengesFromEspecificGame);

// Crear un reto en una partida
router.post("/:id", challengeController.createChallenge);

module.exports = router;
