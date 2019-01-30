import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CheckoutContext, type CheckoutContextShape } from '../contexts'
import { colors, spacing } from '../../styles'
import { CustomerForm, PaymentForm, PaymentCompleted, ProgressIndicator } from './'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
`

const InnerContainer = styled.div`
  width: 100%;
  border-top: 2px solid ${colors.BACKGROUND};
  border-bottom: 2px solid ${colors.BACKGROUND};
  padding: ${spacing.lg} 0px;
  margin-top: ${spacing.lg};
`

const TermsText = styled.small`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  margin-top: ${spacing.md};
  > a {
    margin-left: ${spacing.xs};
    font-weight: bold;
  }
`

type Props = {
  checkoutContext: CheckoutContextShape
}

const Checkout = ({ checkoutContext }: Props) => (
  <div>
    <Container className="animated zoomIn fast">
      <ProgressIndicator currentStep={checkoutContext.currentStep} />
      <InnerContainer>
        {checkoutContext.currentStep === 'customer' ? (
          <CustomerForm />
        ) : checkoutContext.currentStep === 'payment' ? (
          <PaymentForm />
        ) : (
          <PaymentCompleted />
        )}
      </InnerContainer>
    </Container>
    <TermsText>
      Ved å fullføre ordre, så godkjenner du samtidig <Link to="/betingelser">kjøpsvilkår</Link>.
    </TermsText>
  </div>
)

export default () => (
  <CheckoutContext.Consumer>{value => <Checkout checkoutContext={value} />}</CheckoutContext.Consumer>
)
