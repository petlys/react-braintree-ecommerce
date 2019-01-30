import React from 'react'
import styled from 'styled-components'

const PrimaryText = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: -15px;
  font-size: 50px;
`

const SecondaryText = styled.h3`
  text-align: center;
  margin: 0;
`

export const FreeShipping = () => (
  <div>
    <PrimaryText>Fri frakt</PrimaryText>
    <SecondaryText>på ordre over 150kr</SecondaryText>
  </div>
)

export default FreeShipping
