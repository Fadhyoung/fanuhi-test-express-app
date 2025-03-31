const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genres: [String],
    rated: String,
    runtime: Number,
    director: String
});

const Movie = mongoose.model('Movie', movieSchema, 'movies'); // 'movies' is the collection name in sample_mflix
module.exports = Movie;
