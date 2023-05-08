const { Router } = require("express");
const userController = require("../controllers/users");

const router = Router();

router.get("/", userController.getUser);
router.post("/", userController.createUser);

// Update user
router.put("/:userId", userController.updateUser);

router.get("/checkUsername", userController.checkIfUsernameExist);
router.get("/checkEmail", userController.checkIfEmailExist);

router.post("/checkPassword", userController.checkPassword);

// Avatar
router.post("/:userId/avatar", userController.updateAvatar);

module.exports = router;
