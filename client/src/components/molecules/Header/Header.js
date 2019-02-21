import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import moviesActions from 'actions/movies/movies.actions'

import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import logoImg from './logo.svg'
import clapperImg from './clapper.svg'

const RightAlignedButton = styled(Button)`
  position: absolute;
  right: 1rem;
`

const Logo = styled.img`
  max-height: 2.25vh;
`

const Clapper = styled.img`
  max-height: 2.25vh;
  margin-right: 1rem;
`

const HeaderStyle = styled.header`
  width: 100%;
  min-height: 7vh;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Trajan Pro 3', serif;
  line-height: 1rem;
  font-size: 1.8rem;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
`

const Header = ({ showSearchLibrary, toggleLibrarySearch }) => (
  <HeaderStyle data-testid="main-header">
    <Clapper alt="logo" data-testid="clapper" src={clapperImg} />
    <Logo alt="movie ratings" data-testid="logo" src={logoImg} />
    <RightAlignedButton onClick={toggleLibrarySearch} thirdiary>
      {showSearchLibrary ? (
        <Icon color="#FEDC9B" icon={['fas', 'search']} iconsize="2rem" />
      ) : (
        <Icon color="#666" icon={['fas', 'search']} iconsize="2rem" />
      )}
    </RightAlignedButton>
  </HeaderStyle>
)

Header.propTypes = {
  showSearchLibrary: PropTypes.bool.isRequired,
  toggleLibrarySearch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ movies }) => ({
  showSearchLibrary: movies && movies.showSearchLibrary,
})

const mapDispatchToProps = {
  toggleLibrarySearch: moviesActions.toggleSearchLibrary,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
