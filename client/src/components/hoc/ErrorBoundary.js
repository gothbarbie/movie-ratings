import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  }

  componentDidCatch(error, info) {
    this.setState({ error })
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.error('Error', error) // eslint-disable-line
      console.error('ErrorInfo', JSON.stringify(info)) // eslint-disable-line
    } else {
      // Handle error in production
    }
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorWrapper>
          <h1>Oups, something went wrong :(</h1>
          <p>
            Feel free to{' '}
            <a href="mailto:contact@hannasoderstrom.com">report this error</a>.
          </p>
        </ErrorWrapper>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
