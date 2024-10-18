
const Movie = require('../Models/Movie');


// Get all movies (with the user who added them)
exports.getMovies = async (req, res) => {
  try {
    // Populate user field when getting movies
    const movies = await Movie.find().populate('user', 'name');
    res.json(movies);
  } catch (error) {
    res.status(500).json({errors:[{ msg: error.message }]});
    
  }
};

// Get a single movie by ID with user details and reviews
exports.getOneMovie = async (req, res) => {
  const { id } = req.params;

  try {
      const movie = await Movie.findById(id)
          .populate('user', 'email') // Populate user details who added the movie
          .populate({
              path: 'reviews.user', // Populate user details for each review
              select: 'email'
          });

      if (!movie) {
          return res.status(404).json({errors:[{ message: "Movie not found" }]});
      }

      res.status(200).json(movie);
  } catch (error) {
      res.status(500).json({ message: "Error retrieving movie", error });
  }
};


// Create a movie with review and rating
exports.createMovie = async (req, res) => {
  try {
      const { title, genre, description, review, rating } = req.body;

      // Create a new movie instance
      const newMovie = new Movie({
          title,
          genre,
          description,
          user: req.user._id, // Assuming the user is authenticated and their ID is stored in req.user
          reviews: [{ user: req.user._id, review, rating }]
      });

      await newMovie.save();
      res.status(201).json({
          message: 'Movie created successfully',
          newMovie
      });
  } catch (error) {
      console.error('Error creating movie:', error); // Log the error to the console for debugging
      res.status(500).json({ message: 'Error creating movie', error });
  }
};


// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    await movie.remove();
    res.json({ message: 'Movie removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PATCH /movies/:id
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;  // Movie ID from the URL
    const userId = req.user.id; // Assuming you are storing the authenticated user's ID in req.user

    // Find the movie by ID
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Check if the authenticated user is the owner of the movie
    if (movie.user.toString() !== userId) {
      return res.status(403).json({ message: 'You are not authorized to update this movie' });
    }

    // Update the movie with the new data from req.body
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { $set: req.body }, // This will update only the fields that are in req.body
      { new: true, runValidators: true } // Return the updated movie and run schema validators
    );

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all movies created by the current user
exports.getMovieUser = async (req, res) => {
  try {
    // Fetch movies created by the logged-in user
    const movies = await Movie.find({ user: req.user._id }).populate('user', 'name email'); // Optionally populate user details

    if (!movies.length) {
      return res.status(404).json({ message: 'No movies found for this user' });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching movies for this user',
      error
    });
  }
};