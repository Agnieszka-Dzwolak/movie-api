import express from 'express';

import movieControllers from '../controllers/movies.js';

const router = express.Router();

const { getMovies, getMovie, addMovie, updateMovie, deleteMovie } =
    movieControllers;

//Movie routes
router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;
