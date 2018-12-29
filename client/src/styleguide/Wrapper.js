import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../components/themes/default'
import Normalize from '../components/Normalize'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import Root from '../components/Root'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  alerts: () => ({
    display: true,
    type: 'alert',
    message: 'message',
  }),
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// Add all icons used here
library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
)

export default class ThemeWrapper extends Component {
  render() {
    return (
      <Root store={store}>
        <ThemeProvider theme={theme}>
          <>
            <Normalize />
            {this.props.children}
          </>
        </ThemeProvider>
      </Root>
    )
  }
}
