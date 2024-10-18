const express = require('express');
const { getMovies, createMovie, deleteMovie, updateMovie, getOneMovie, getMovieUser } = require('../Controllers/movieController');
const { isAuth } = require('../Middlewares/IsAuth');

const router = express.Router();

router.get('/my-movies', isAuth, getMovieUser)

router.route('/')
  .get(getMovies)
  .post(isAuth, createMovie) // Add protect middleware to secure this route

  
router.route('/:id')
.patch(updateMovie)
.get(getOneMovie)
.delete( deleteMovie);



module.exports = router;