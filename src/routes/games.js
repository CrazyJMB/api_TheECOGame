const { Router } = require("express");
const gameController = require("../controllers/games");

const router = Router();

// Crear partida a un usuario concreto
router.post("/", gameController.createGame);

// Devuelve el listado de partidas de un usuario concreto
router.get("/:id", gameController.getGameById);

router.put("/:id", gameController.updateScore);

router.put("/:id/endGame", gameController.setGameEnd);

// Añadir reto a la partida
router.post("/:id/addChallenge", gameController.addChallengeToGame);

module.exports = router;
