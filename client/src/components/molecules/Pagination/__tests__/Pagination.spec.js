import React from 'react'
import { render } from 'react-testing-library'
import { axe } from 'jest-axe'

import Theme from 'components/Theme'

import Pagination from '..'

describe('Components/Molecules/Pagination', () => {
  it('renders', () => {
    const props = {
      currentPage: 1,
      itemsTotal: 100,
      onPageChange: jest.fn(),
      pageLimit: 10,
      pageNeighbors: 1,
    }
    const { getByTestId } = render(
      <Theme>
        <Pagination {...props} />
      </Theme>,
    )
    expect(getByTestId('navigation').children[0].children.length).toEqual(7)
  })

  it('is accessible', async () => {
    const props = {
      currentPage: 1,
      itemsTotal: 100,
      onPageChange: jest.fn(),
      pageLimit: 10,
      pageNeighbors: 1,
    }
    const { container } = render(
      <Theme>
        <Pagination {...props} />
      </Theme>,
    )
    const results = await axe(container.innerHTML)
    expect(results).toHaveNoViolations()
  })
})
