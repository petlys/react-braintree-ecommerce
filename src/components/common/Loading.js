import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import loadingGif from '../../images/gifs/loading.gif'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Loading = () => (
  <Container className="animated fadeIn fast">
    <img src={loadingGif} alt="loading" width="50px" />
  </Container>
)

export default Loading
