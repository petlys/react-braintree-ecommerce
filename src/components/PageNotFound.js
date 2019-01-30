import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { default as PageNotFoundImage } from '../images/404.png'
import { breakpoints } from '../styles'

const Container = styled.div`
  margin: 0 auto;
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    flex-direction: column;
  }
`

const Image = styled.img`
  @media (max-width: ${breakpoints.MEDIUM_AND_BELOW}) {
    width: 450px;
  }
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    width: 300px;
  }
`

export const PageNotFound = () => (
  <div>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>

    <Container className="animated zoomIn fast centerFlex">
      <Image src={PageNotFoundImage} alt="404 - Ikke funnet" />
      <div>
        <h1>404 - Ikke funnet</h1>
        <p>Denne siden eksisterer ikke.</p>
      </div>
    </Container>
  </div>
)

export default PageNotFound
