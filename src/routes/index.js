const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

console.log("✅ Routes are loaded!");

router.get('/', (req, res) => {
    res.json({ message: "Welcome to Express API!" });
});

router.get('/movies', async (req, res) => {
    try {
        const { title, year, genre, rated } = req.query; // Get query parameters

        let filter = {};
        if (title) filter.title = new RegExp(title, "i");
        if (year) filter.year = Number(year);
        if (genre) filter.genres = genre;
        if (rated) filter.rated = rated;

        const movies = await Movie.find(filter).limit(10);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});



module.exports = router;
