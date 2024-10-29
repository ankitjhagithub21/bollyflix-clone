const express = require('express');
const movieRouter = express.Router();
const movieController = require('../controllers/movieController');

movieRouter.post('/', movieController.createMovie);
movieRouter.delete('/:id', movieController.removeMovie);
movieRouter.get('/', movieController.getAllMovies);
movieRouter.get('/title/:title', movieController.getMovieByTitle);

module.exports = movieRouter;
