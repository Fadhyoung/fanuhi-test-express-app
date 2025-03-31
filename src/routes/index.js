const express = require('express');
const { getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Welcome to Express API!" });
});

router.get('/movies', getMovies);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

module.exports = router;
