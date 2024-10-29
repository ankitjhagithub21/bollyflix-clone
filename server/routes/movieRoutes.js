const express = require('express');
const movieRouter = express.Router();
const movieController = require('../controllers/movieController');
const verifyToken = require('../middlewares/verifyToken');

movieRouter.post('/', verifyToken,movieController.createMovie);
movieRouter.delete('/:id', verifyToken,movieController.removeMovie);
movieRouter.get('/', movieController.getAllMovies);
movieRouter.get('/title/:title', movieController.getMovieByTitle);

module.exports = movieRouter;
