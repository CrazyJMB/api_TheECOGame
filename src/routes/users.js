const { Router } = require("express");
const participantes = require("../controllers/users");

const router = Router();

router.get("/", participantes.getUsers);
router.post("/", participantes.createUser);
router.put("/", participantes.updateUser);
router.delete("/", participantes.deleteUser);
router.get("/:user", participantes.getUser);
router.get("/:user/password", participantes.getPassword);

module.exports = router;
