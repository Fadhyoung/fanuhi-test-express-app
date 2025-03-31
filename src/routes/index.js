const express = require('express');
const { getMovies } = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Welcome to Express API!" });
});

router.get('/movies', getMovies);

module.exports = router;
