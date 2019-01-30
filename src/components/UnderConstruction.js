import React from 'react'
import styled from 'styled-components'
import { spacing } from '../styles'
import { SpannerIcon } from './icons'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
  flex-direction: column;
  text-align: center;
  padding: ${spacing.lg};
  h1 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }
`

const EasterEggButton = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  right: 0;
`

type Props = {
  hide: Function
}

export const UnderConstruction = (props: Props) => (
  <Container className="centerFlex">
    <EasterEggButton onClick={props.hide} />
    <SpannerIcon size="50" />
    <h1>Vi oppdaterer nettbutikken!</h1>
    <p>Kom gjerne tilbake om en liten stund.</p>
  </Container>
)

export default UnderConstruction
