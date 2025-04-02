const Movie = require('../models/movie.model');

exports.getMovies = async (filters, limit = 10) => {
    let query = {};
    if (filters.title) query.title = new RegExp(filters.title, "i");
    if (filters.year) query.year = Number(filters.year);
    if (filters.genre) query.genres = new RegExp(filters.genre, "i"); 
    if (filters.rated) query.rated = filters.rated;

    return await Movie.find(query).limit(limit);
};

exports.createMovie = async (movieData) => {
    return await Movie.create(movieData);
};

exports.updateMovie = async (id, movieData) => {
    return await Movie.findOneAndUpdate({ const: id }, movieData, { new: true });
};


exports.deleteMovie = async (id) => {
    return await Movie.findOneAndDelete({const: id});
};
