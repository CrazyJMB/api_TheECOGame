const { Router } = require("express");
const statisticsController = require("../controllers/statistics");

const router = Router();

router.get("/:userId", statisticsController.getStatistic);

router.put("/:userId/win", statisticsController.updateWinCount);
router.put("/:userId/lose", statisticsController.updateLostCount);
router.put("/:userId/quit", statisticsController.updateQuitCount);

router.put("/:userId/time", statisticsController.updateTimeInGame);

router.put(
  "/:userId/questionCorrect",
  statisticsController.updateQuestionCorrectCount
);
router.put(
  "/:userId/questionFailed",
  statisticsController.updateQuestionFailedCount
);

router.put(
  "/:userId/hangmanCorrect",
  statisticsController.updateHangmanCorrectCount
);
router.put(
  "/:userId/hangmanFailed",
  statisticsController.updateHangmanFailedCount
);

module.exports = router;
