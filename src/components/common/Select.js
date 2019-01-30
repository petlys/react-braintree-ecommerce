import React from 'react'
import styled from 'styled-components'
import { spacing, colors } from '../../styles'

const Select = styled.select`
  position: relative;
  outline: none;
  background: white;
  border: 1px solid ${colors.TERTIARY_TEXT};
  padding: ${spacing.sm};
`

type Props = {
  values: any[],
  value: string | number,
  onChange: Function
}

export default ({ values, value, onChange }: Props) => (
  <Select value={value} onChange={onChange}>
    {values.map(value => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </Select>
)
