const { Router } = require("express");
const preguntas = require("../controllers/questions");

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
router.get("/", preguntas.getQuestions);

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
router.get("/:id", preguntas.getQuestion);

module.exports = router;
