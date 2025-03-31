const movieService = require('../services/movie.service');

exports.getMovies = async (req, res) => {
    try {
        const filters = req.query;
        const movies = await movieService.getMovies(filters);
        console.log(movies)
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
};

exports.createMovie = async (req, res) => {
    try {
        const newMovie = await movieService.createMovie(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Failed to create movie" });
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await movieService.updateMovie(req.params.id, req.body);
        if (!updatedMovie) return res.status(404).json({ error: "Movie not found" });
        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: "Failed to update movie" });
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await movieService.deleteMovie(req.params.id);
        if (!deletedMovie) return res.status(404).json({ error: "Movie not found" });
        res.json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete movie" });
    }
};
