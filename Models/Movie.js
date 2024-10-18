const mongoose = require('mongoose');

// Review schema now references the User model
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Changed to ObjectId
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
}, { timestamps: true });

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  reviews: [reviewSchema], 
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
