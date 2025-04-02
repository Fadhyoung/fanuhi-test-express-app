const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    const: { type: String, required: true, unique: true },
    yourRating: Number,
    dateRated: String,
    title: String,
    originalTitle: String,
    poster: String,
    url: String,
    titleType: String,
    imdbRating: Number,
    runtime: String,
    year: Number,
    genres: [String],
    numVotes: Number,
    releaseDate: String,
    directors: String
});

const Movie = mongoose.model("Movie", movieSchema, "movies");
module.exports = Movie;
