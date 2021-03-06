import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import range from 'helpers/range'

import Icon from 'components/atoms/Icon'

const Wrapper = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    justify-content: center;
  }

  li {
    margin: 0 0.2rem;
  }

  button {
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

const Prev = styled.button`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.textDark};

  svg {
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.textDark : theme.colors.primary};
  }
`
const Next = styled.button`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.textDark};

  svg {
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.textDark : theme.colors.primary};
  }
`
const Page = styled.button`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.textDark};

  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.textDark : theme.colors.primary};
`

const LEFT = 'LEFT'
const RIGHT = 'RIGHT'

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.totalPages = Math.ceil(props.itemsTotal / props.pageLimit)
  }

  toNext = () => {
    this.toPage(this.props.currentPage - this.props.pageNeighbors * 2 - 1)
  }

  toPrev = () => {
    this.toPage(this.props.currentPage + this.props.pageNeighbors * 2 + 1)
  }

  toPage = page => {
    const validPage = Math.max(0, Math.min(page, this.totalPages))
    if (page !== this.props.currentPage) {
      this.props.onPageChange(validPage)
    }
  }

  fetchPageNumbers = () => {
    const { pageNeighbors, currentPage } = this.props

    const totalNumbers = pageNeighbors * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (this.totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors)
      const endPage = Math.min(this.totalPages - 1, currentPage + pageNeighbors)

      let pages = range(startPage, endPage)

      const hasLeftSpill = startPage > 2
      const hasRightSpill = this.totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1)
        pages = [LEFT, ...extraPages, ...pages]
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset)
        pages = [...pages, ...extraPages, RIGHT]
      } else if (hasLeftSpill && hasRightSpill) {
        pages = [LEFT, ...pages, RIGHT]
      }

      return [1, ...pages, this.totalPages]
    }
    return range(1, this.totalPages)
  }

  render() {
    const { currentPage } = this.props

    const pages = this.fetchPageNumbers()

    if (pages.length === 1) return null

    return (
      <Wrapper aria-label="Pagination" data-testid="navigation">
        <ul>
          {pages &&
            pages.length &&
            pages.map((page, i) => {
              if (page === LEFT)
                return (
                  <li key={i}>
                    <Prev
                      aria-label="go to previous page"
                      isActive={currentPage === 1}
                      onClick={this.toPrev}
                    >
                      <Icon icon={['fas', 'chevron-left']} />
                    </Prev>
                  </li>
                )

              if (page === RIGHT)
                return (
                  <li key={i}>
                    <Next
                      aria-label="go to next page"
                      isActive={currentPage === this.totalPages}
                      onClick={this.toNext}
                    >
                      <Icon icon={['fas', 'chevron-right']} />
                    </Next>
                  </li>
                )

              return (
                <li key={i}>
                  <Page
                    aria-label={`go to page ${page}`}
                    isActive={page === currentPage}
                    onClick={() => this.toPage(page)}
                  >
                    {page}
                  </Page>
                </li>
              )
            })}
        </ul>
      </Wrapper>
    )
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsTotal: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageLimit: PropTypes.number.isRequired,
  pageNeighbors: PropTypes.number.isRequired,
}

export default Pagination
