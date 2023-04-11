const { Router } = require("express");
const questionController = require("../controllers/questions");

const router = Router();

/**
 * @openapi
 * /questions:
 *   get:
 *     summary: Gets a list of questions.
 *     tags:
 *       - Questions
 *     responses:
 *       '200':
 *         description: List of questions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_pregunta:
 *                         type: integer
 *                         example: 1
 *                       pregunta:
 *                         type: string
 *                         example: What is the capital of Spain?
 *                       respuesta:
 *                         type: string
 *                         example: Madrid
 *                       opcion1:
 *                         type: string
 *                         example: Barcelona
 *                       opcion2:
 *                         type: string
 *                         example: Seville
 *                       opcion3:
 *                         type: string
 *                         example: Valencia
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error.
 */
router.get("/", questionController.getQuestions);

router.get("/:dif/", questionController.getQuestionsByDifficult);

router.get("/:dif/random", questionController.getRandomQuestionByDifficult);

router.get(
  "/:dif/:userId/",
  questionController.getRandomQuestionForSpecificUser
);

/**
 * @openapi
 * /questions:
 *   get:
 *     summary: Gets a list of questions.
 *     tags:
 *       - Questions
 *     responses:
 *       '200':
 *         description: List of questions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questions:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_pregunta:
 *                         type: integer
 *                         example: 1
 *                       pregunta:
 *                         type: string
 *                         example: What is the capital of Spain?
 *                       respuesta:
 *                         type: string
 *                         example: Madrid
 *                       opcion1:
 *                         type: string
 *                         example: Barcelona
 *                       opcion2:
 *                         type: string
 *                         example: Seville
 *                       opcion3:
 *                         type: string
 *                         example: Valencia
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Internal server error.
 */
router.get("/:id", questionController.getQuestion);

module.exports = router;
