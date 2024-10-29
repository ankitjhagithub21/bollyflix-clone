const Movie = require('../models/Movie');

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json({success:true,message:"Movie added successfully.",data:savedMovie});
  } catch (error) {
    res.status(400).json({success:false, message: "Server error." });
  }
};


const removeMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({success:false, message: 'Movie not found' });
    }
    res.status(200).json({success:true, message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ success:false,message: "Server error" });
  }
};

// @desc Get all movies
// @route GET /api/movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({success:true,movies});
  } catch (error) {
    res.status(500).json({ success:false,message:"Server error." });
  }
};


const getMovieByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    // Use regex to find movies that include the given title (case-insensitive)
    const movies = await Movie.find({ 
      fullName: { $regex: title, $options: 'i' } 
    });

    if (movies.length === 0) {
      return res.status(404).json({ success: false, message: 'No movies found' });
    }

    res.status(200).json({ success: true, movies });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


module.exports = {
  createMovie,
  removeMovie,
  getAllMovies,
  getMovieByTitle,
};
