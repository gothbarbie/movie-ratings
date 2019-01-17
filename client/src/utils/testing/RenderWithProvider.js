import React from 'react'
import { render } from 'react-testing-library'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function renderWithStore(
  ui,
  {
    initialState,
    reducer,
    store = createStore(reducer, initialState),
    ...options
  } = {},
) {
  return render(<Provider store={store}>{ui}</Provider>, options)
}

export default renderWithStore
