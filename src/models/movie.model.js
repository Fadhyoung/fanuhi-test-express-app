const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Title: String,
    OriginalTitle: String,
    URL: String,
    TitleType: String,
    IMDbRating: Number,
    Runtime: String,
    Year: Number,
    Genres: String,
    NumVotes: Number,
    ReleaseDate: String,
    Directors: String
});

const Movie = mongoose.model('Movie', movieSchema, 'movies'); // 'movies' is the collection name in sample_mflix
module.exports = Movie;
