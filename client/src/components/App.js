import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import { store } from 'helpers/store'

import Root from './Root'
import Theme from './Theme'
import Normalize from './Normalize'

import ErrorBoundary from 'components/hoc/ErrorBoundary'
import PrivateRoute from 'components/hoc/PrivateRoute'

import Alert from 'components/molecules/Alert'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

import Library from './pages/Library'
import New from './pages/New'
import Login from './pages/Login'
import Account from './pages/Account'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`

const App = ({ loggedIn }) => (
  <ErrorBoundary>
    <Root store={store}>
      <Theme>
        <Router>
          <Wrapper>
            <Normalize />
            <Header />

            <div>
              <PrivateRoute path="/new" exact component={New} />
              <Route path="/login" exact component={Login} />
              <PrivateRoute path="/account" exact component={Account} />
              <PrivateRoute path="/" exact component={Library} />
            </div>

            <Alert />
            <Navigation loggedIn={loggedIn} />
          </Wrapper>
        </Router>
      </Theme>
    </Root>
  </ErrorBoundary>
)

export default App
