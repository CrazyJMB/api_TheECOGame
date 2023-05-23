const { Router } = require("express");
const rankingController = require("../controllers/rankings");

const router = Router();

router.get("/", rankingController.getRanking);

router.get("/:userId", rankingController.getPositionFromSpecificUser);

module.exports = router;
