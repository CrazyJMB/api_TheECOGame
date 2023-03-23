const { Router } = require("express");
const participantes = require("../controllers/users.controller");

const router = Router();

router.get("/", participantes.getUsers);
router.get("/:user", participantes.getUser);
router.get("/:user/password", participantes.getPassword);

module.exports = router;
