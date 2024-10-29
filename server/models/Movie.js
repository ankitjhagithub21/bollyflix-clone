const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  language: {
    type: String,
    required: true
  },
  releasedYear: {
    type: Number,
    required: true,
    min: 1888 // The year the first movie was made
  },
  size: {
    type: String, // e.g., '1.5GB', '700MB'
    required: true
  },
  quality: {
    type: String, // e.g., '720p', '1080p', '4K'
    required: true
  },
  genre: {
    type: [String], // Array to store multiple genres, e.g., ['Action', 'Drama']
    required: true
  },
  movieType: {
    type: String, // e.g. hollywood
    required: true
  },
  format: {
    type: String, // e.g., 'MP4', 'MKV', 'AVI'
    required: true
  },
  subtitles: {
    type: String, 
    default: "N/A"
  },
  storyline: {
    type: String,
    required: true,
    trim: true
  },
  screenshots: {
    type: Array,
  },
  downloadLinks:{
    type:Array
  }

}, { timestamps: true });

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie
