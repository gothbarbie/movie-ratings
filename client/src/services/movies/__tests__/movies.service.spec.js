import fetchMock from 'fetch-mock'
import moviesService from '../movies.service'

describe('Services/Movies', () => {
  fetchMock.config.overwriteRoutes = true

  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('getAll', () => {
    it('handles successful request', async () => {
      const genres = ['genresId01']
      const rating = 5
      const data = [
        {
          id: 'mid01',
          title: 'The Title',
          year: '1998',
          runtime: '136 min',
          director: 'Someone',
          actors: 'Me and Someone',
          poster: 'http://www.site.com/poster01.jpg',
          imdbID: 'tt001',
          rating: 4,
        },
        {
          id: 'mid02',
          title: 'The Title 2',
          year: '1999',
          runtime: '130 min',
          director: 'Someone',
          actors: 'Me and Someone',
          poster: 'http://www.site.com/poster02.jpg',
          imdbID: 'tt002',
          rating: 2,
        },
      ]

      fetchMock.mock(
        '/movies/?limit=10&page=1&filterGenres=[%22genresId01%22]&filterRating=5',
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data,
          }),
        },
      )

      const result = await moviesService.getAll({
        limit: 10,
        page: 1,
        genres,
        rating,
      })

      const expectedResult = { data }

      expect(result).toEqual(expectedResult)
    })

    it('handles failed request', async () => {
      fetchMock.mock('/movies/?limit=10&page=1', {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: null,
        }),
      })

      try {
        await moviesService.getAll({ limit: 10, page: 1 })
      } catch (error) {
        const expectedResult = { message: 'Forbidden', status: 403 }
        expect(error).toEqual(expectedResult)
      }
    })
  })

  describe('create', () => {
    it('handles successful request', async () => {
      fetchMock.mock('/movies/create', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'success',
          message: 'Movie added successfully',
          data: null,
        }),
      })
      const movie = {}
      const result = await moviesService.create(movie)
      const expectedResult = {
        data: null,
        message: 'Movie added successfully',
        status: 'success',
      }

      expect(result).toEqual(expectedResult)
    })
    it('handles failed request', async () => {
      fetchMock.mock('/movies/create', {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: null },
      })

      try {
        const movie = {}
        await moviesService.create(movie)
      } catch (error) {
        const expectedResult = { message: 'Forbidden', status: 403 }

        expect(error).toEqual(expectedResult)
      }
    })
  })
})
