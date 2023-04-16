const { Router } = require("express");
const statisticsController = require("../controllers/statistics");

const router = Router();

router.get("/:userId", statisticsController.getStatistic);
router.post("/:userId", statisticsController.createStatistics);
router.put("/:userId", statisticsController.updateStatistics);

module.exports = router;
