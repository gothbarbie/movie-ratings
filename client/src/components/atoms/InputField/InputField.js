import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyle = styled.input`
  height: 3.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.4rem;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
  }

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  }
`

const InputField = ({ name, type, placeholder, value, onBlur, onChange }) => (
  <InputStyle
    data-testid="input"
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    value={value}
  />
)

InputField.defaultProps = {
  name: '',
  onBlur: null,
  placeholder: '',
  type: 'text',
  value: '',
}

InputField.propTypes = {
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}

export default InputField
