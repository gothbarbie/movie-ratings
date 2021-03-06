import handleResponse from '../handle-response'
import headers from 'helpers/headers'

const getAll = async ({ limit = 10, page = 1, genres, rating }) => {
  const options = await headers('GET::AUTH')

  const filterGenres =
    genres && genres.length ? `&filterGenres=${JSON.stringify(genres)}` : ''

  const filterRating = rating && rating > 0 ? `&filterRating=${rating}` : ''

  const response = await fetch(
    `/movies/?limit=${limit}&page=${page}${filterGenres}${filterRating}`,
    options,
  )
  return await handleResponse(response)
}

const getLatest = async (amount = 10) => {
  const options = await headers('GET::AUTH')
  const response = await fetch(`/movies/latest/${amount}`, options)
  return await handleResponse(response)
}

const create = async movie => {
  const options = await headers('POST::AUTH', movie)
  const response = await fetch('/movies/create', options)
  return await handleResponse(response)
}

const update = async (movieId, newProps) => {
  const options = await headers('PUT::AUTH', newProps)
  const response = await fetch(`/movies/${movieId}`, options)
  return await handleResponse(response)
}

const deleteById = async id => {
  const options = await headers('DELETE::AUTH')
  const response = await fetch(`/movies/${id}`, options)
  return await handleResponse(response)
}

const findByTitle = async title => {
  const options = await headers('GET::AUTH')
  const response = await fetch(`/movies/title/${title}`, options)
  return await handleResponse(response)
}

const moviesService = {
  getAll,
  getLatest,
  create,
  update,
  deleteById,
  findByTitle,
}

export default moviesService
