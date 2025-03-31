const Movie = require('../models/movie.model');

exports.getMovies = async (filters, limit = 10) => {
    let query = {};
    if (filters.title) query.Title = new RegExp(filters.title, "i");
    if (filters.year) query.Year = Number(filters.year);
    if (filters.genre) query.Genres = new RegExp(filters.genre, "i"); 
    if (filters.rated) query.Rated = filters.rated;

    return await Movie.find(query).limit(limit);
};

exports.createMovie = async (movieData) => {
    return await Movie.create(movieData);
};

exports.updateMovie = async (id, movieData) => {
    return await Movie.findByIdAndUpdate(id, movieData, { new: true });
};

exports.deleteMovie = async (id) => {
    return await Movie.findByIdAndDelete(id);
};
