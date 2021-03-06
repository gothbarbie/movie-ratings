import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import InputField from '..'
import Theme from '../../../Theme'

describe('<InputField />', () => {
  let onChange
  let onBlur
  let props
  let utils

  beforeEach(() => {
    onChange = jest.fn()
    onBlur = jest.fn()
    props = {
      name: 'name',
      type: 'text',
      placeholder: 'placeholder',
      value: '',
      onChange,
      onBlur,
    }
    utils = render(
      <Theme>
        <InputField {...props} />
      </Theme>,
    )
  })

  afterEach(() => cleanup())

  it('renders', () => {
    expect(utils.getByTestId('input').tagName).toBe('INPUT')
  })

  it('handles input', () => {
    fireEvent.change(utils.getByTestId('input'), { target: { value: 'A' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
