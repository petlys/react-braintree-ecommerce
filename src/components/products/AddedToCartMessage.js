import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import { CheckmarkIcon } from '../icons'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BACKGROUND};
  flex-direction: column;
  color: ${colors.BLACK};
`

export default () => (
  <Container className="centerFlex">
    <CheckmarkIcon size="150" color={colors.GREEN} className="animated bounceIn" />
    <h1 className="animated bounceIn">Lagt i handlevogn!</h1>
  </Container>
)
