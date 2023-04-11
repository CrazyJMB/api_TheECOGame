const { Router } = require("express");
const gameController = require("../controllers/games");

const router = Router();

// Devuelve las partidas existentes en la BD
router.get("/", gameController.getGames);

// Devuelve el listado de partidas de un usuario concreto
router.get("/:id", gameController.getGameById);

// Crear partida a un usuario concreto
router.post("/", gameController.createGame);

module.exports = router;
