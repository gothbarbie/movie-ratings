import moviesTypes from './movies.types'

// getAllMovies
const getAllMovies = () => ({
  type: moviesTypes.GET_ALL_MOVIES,
})

const getAllMoviesSuccess = ({ movies }) => ({
  type: moviesTypes.GET_ALL_MOVIES_SUCCESS,
  payload: { movies },
})

const getAllMoviesFailure = () => ({
  type: moviesTypes.GET_ALL_MOVIES_FAILURE,
})

// getLatestMovie
const getLatestMovies = () => ({
  type: moviesTypes.GET_LATEST_MOVIES,
})

const getLatestMoviesSuccess = ({ movies }) => ({
  type: moviesTypes.GET_LATEST_MOVIES_SUCCESS,
  payload: { movies },
})

const getLatestMoviesFailure = () => ({
  type: moviesTypes.GET_LATEST_MOVIES_FAILURE,
})

// createMovie
const createMovie = () => ({
  type: moviesTypes.CREATE_MOVIE,
})

const createMovieSuccess = movie => ({
  type: moviesTypes.CREATE_MOVIE_SUCCESS,
  payload: { movie },
})

const createMovieFailure = () => ({
  type: moviesTypes.CREATE_MOVIE_FAILURE,
})

// updateMovie
const updateMovie = () => ({
  type: moviesTypes.UPDATE_MOVIE,
})

const updateMovieSuccess = movie => ({
  type: moviesTypes.UPDATE_MOVIE_SUCCESS,
  payload: { movie },
})

const updateMovieFailure = () => ({
  type: moviesTypes.UPDATE_MOVIE_FAILURE,
})

// deleteMovie
const deleteMovie = () => ({
  type: moviesTypes.DELETE_MOVIE,
})

const deleteMovieSuccess = id => ({
  type: moviesTypes.DELETE_MOVIE_SUCCESS,
  payload: { id },
})

const deleteMovieFailure = () => ({
  type: moviesTypes.DELETE_MOVIE_FAILURE,
})

// find by title
const findByTitle = () => ({
  type: moviesTypes.FIND_MOVIE_BY_TITLE,
})

const findByTitleSuccess = movie => ({
  type: moviesTypes.FIND_MOVIE_BY_TITLE_SUCCESS,
  payload: { movie },
})

const findByTitleFailure = () => ({
  type: moviesTypes.FIND_MOVIE_BY_TITLE_FAILURE,
})

// filter by rating
const filterByRating = () => ({
  type: moviesTypes.FILTER_BY_RATING,
})

const filterByRatingSuccess = movie => ({
  type: moviesTypes.FILTER_BY_RATING_SUCCESS,
  payload: { movie },
})

const filterByRatingFailure = () => ({
  type: moviesTypes.FILTER_BY_RATING_FAILURE,
})

const moviesActions = {
  getAllMovies,
  getAllMoviesSuccess,
  getAllMoviesFailure,
  getLatestMovies,
  getLatestMoviesSuccess,
  getLatestMoviesFailure,
  createMovie,
  createMovieSuccess,
  createMovieFailure,
  updateMovie,
  updateMovieSuccess,
  updateMovieFailure,
  deleteMovie,
  deleteMovieSuccess,
  deleteMovieFailure,
  findByTitle,
  findByTitleSuccess,
  findByTitleFailure,
  filterByRating,
  filterByRatingSuccess,
  filterByRatingFailure,
}

export default moviesActions
