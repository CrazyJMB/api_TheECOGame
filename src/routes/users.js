const { Router } = require("express");
const userController = require("../controllers/users");

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.put("/", userController.updateUser);
router.delete("/", userController.deleteUser);
router.get("/:user", userController.getUser);
router.get("/:user/password", userController.getPassword);

module.exports = router;
