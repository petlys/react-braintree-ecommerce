import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { spacing, breakpoints, shadows, colors } from '../../styles'
import Logo from '../../images/logo-white.png'
import Navigation from './Navigation'
import Cart from './Cart'

const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  background-color: ${colors.BLACK};
  padding: ${spacing.xl} 108px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${shadows.DEFAULT};
  @media (max-width: ${breakpoints.MEDIUM_AND_BELOW}) {
    padding: ${spacing.xl};
  }
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    padding: ${spacing.md} ${spacing.sm};
    flex-direction: column;
  }
`

const LogoContainer = styled(Link)`
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    margin-bottom: ${spacing.sm};
  }
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Header = () => (
  <Container className="animated slideInDown medium">
    <LogoContainer to="/">
      <img src={Logo} height="50px" alt="Logo" />
    </LogoContainer>
    <InnerContainer>
      <Navigation />
      <Cart />
    </InnerContainer>
  </Container>
)

export default Header
