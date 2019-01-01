import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { createMovie } from 'actions/movies/movies.thunks'

import { TextDark } from 'components/atoms/Typography'
import Button from 'components/atoms/Button'

import Rating from 'components/molecules/Rating'

import Movie from 'components/organisms/Movie'

const SearchResult = styled.div`
  margin-top: 2rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SearchForTitle = styled.div`
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
`

const RateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class RateNewMovie extends Component {
  state = {
    rating: 0,
  }

  setRating = rating =>
    this.setState({
      rating,
    })

  saveNewRating = () => {
    const { createMovie, movie } = this.props
    const newMovie = {
      ...movie,
      rating: this.state.rating,
    }
    createMovie(newMovie)
  }

  render() {
    const { loading, movie } = this.props

    if (loading) return <div>Loading...</div>

    return movie ? (
      <SearchResult>
        <div>Result</div>
        {movie.inLibrary && (
          <TextDark>This movie already exists in the library</TextDark>
        )}
        <Movie {...movie} />
        <RateWrapper>
          {!movie.inLibrary && (
            <div>
              Rate this movie:
              <Rating setRating={this.setRating} rating={this.state.rating} />
              <Button disabled={movie.inLibrary} onClick={this.saveNewRating}>
                Save
              </Button>
            </div>
          )}
        </RateWrapper>
      </SearchResult>
    ) : (
      <SearchForTitle>Search for a title</SearchForTitle>
    )
  }
}

RateNewMovie.propTypes = {
  loading: PropTypes.bool.isRequired,
  movie: PropTypes.oneOf([
    PropTypes.null,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      actors: PropTypes.string.isRequired,
      awards: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      imdbRating: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      metascore: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      production: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      released: PropTypes.number.isRequired,
      runtime: PropTypes.number.isRequired,
      title: PropTypes.number.isRequired,
      website: PropTypes.number.isRequired,
      writer: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
    }),
  ]),
  error: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ search }) => ({
  ...search,
})

const mapDispatchToProps = {
  createMovie,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RateNewMovie)
