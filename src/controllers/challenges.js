// Conexion a la BD
const db = require("../services/database");

const { handleErrorResponse } = require("../util/handleError");

// TODO: Get challenge by id
const getChallenge = async (req, res) => {};

// TODO: Get list of challenges from a especific game
const getChallengesFromEspecificGame = async (req, res) => {};

// TODO: Create challenge to a especific game
const createChallenge = async (req, res) => {};

module.exports = {
  getChallenge,
  getChallengesFromEspecificGame,
  createChallenge,
};
