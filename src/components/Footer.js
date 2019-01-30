import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { spacing, breakpoints, shadows, colors } from '../styles'
import { EmailIcon, FaqIcon } from './icons'
import visa from '../images/visa.svg'
import mastercard from '../images/mastercard.svg'
import paypal from '../images/paypal.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.BLACK};
  padding: ${spacing.xs} 108px;
  z-index: 1;
  box-shadow: ${shadows.DEFAULT};
  @media (max-width: ${breakpoints.MEDIUM_AND_BELOW}) {
    padding: ${spacing.xs} ${spacing.xl};
  }
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    padding: ${spacing.md};
    justify-content: space-around;
  }
`

const Email = styled.a`
  color: white;
  display: flex;
  align-items: center;
  transition: 200ms;
  @media (min-width: ${breakpoints.SMALL_AND_BELOW}) {
    :hover {
      transform: scale(1.1);
    }
  }
`

const ImageContainer = styled.a`
  transition: 200ms;
  cursor pointer;
  > img {
    :first-child {
      margin-right: ${spacing.xs};
    }
    :last-child {
      margin-left: ${spacing.xs};
    }
  }
  @media (min-width: ${breakpoints.SMALL_AND_BELOW}) {
    :hover {
      transform: scale(1.1);
    }
  }
`

const AboutUs = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  transition: 200ms;
  @media (min-width: ${breakpoints.SMALL_AND_BELOW}) {
    :hover {
      transform: scale(1.1);
    }
  }
`

export const Footer = () => (
  <Container className="animated slideInUp medium">
    <Email href="mailto:kundeservice@adaptere.no">
      <EmailIcon size="25" color="white" />
      <span style={{ marginLeft: spacing.sm }}>KONTAKT OSS</span>
    </Email>
    <AboutUs to="/om-oss">
      <FaqIcon size="25" color="white" />
      <span style={{ marginLeft: spacing.sm }}>INFORMASJON</span>
    </AboutUs>
    <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>
      <ImageContainer href="https://www.braintreepayments.com" target="_blank">
        <img src={visa} alt="Visa" />
        <img src={mastercard} alt="Mastercard" />
        <img src={paypal} alt="PayPal" />
      </ImageContainer>
    </MediaQuery>
  </Container>
)

export default Footer
