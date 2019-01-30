import React from 'react'
import styled from 'styled-components'
import { EmptyCartIcon } from '../icons'
import { colors } from '../../styles'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: ${colors.TERTIARY_TEXT};
`

export const EmptyCart = () => (
  <Container className="centerFlex animated zoomIn fast">
    <EmptyCartIcon size="50" color={colors.TERTIARY_TEXT} />
    <h2>Handlevognen din er tom.</h2>
  </Container>
)

export default EmptyCart
