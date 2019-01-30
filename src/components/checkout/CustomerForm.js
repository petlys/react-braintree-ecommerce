import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CheckoutContext, type CheckoutContextShape } from '../contexts'
import { TextField, SuccessButton, DangerButton } from '../common'
import { spacing } from '../../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > input {
    align-items: center;
  }
`

const InnerFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  div:first-child {
    margin-right: ${spacing.xs};
  }
  div:last-child {
    margin-right: ${spacing.xs};
  }
`

const Header = styled.h2`
  margin-top: 0;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type Props = {
  checkoutContext: CheckoutContextShape
}

const CustomerForm = (props: Props) => {
  const {
    updateCurrentStep,
    onFormChange,
    email,
    firstname,
    lastname,
    address,
    county,
    postcode,
    customerFormValid
  } = props.checkoutContext

  return (
    <Container>
      <Header>Hvem skal vi sende til?</Header>
      <TextField
        required
        type="email"
        name="email"
        pattern="^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$"
        errorMsg="Ugyldig epost addresse"
        value={email.value}
        valid={email.valid}
        onChange={onFormChange}
        placeholder="Epost"
      />
      <InnerFormContainer>
        <TextField
          required
          name="firstname"
          errorMsg="Mangler fornavn"
          value={firstname.value}
          valid={firstname.valid}
          onChange={onFormChange}
          placeholder="Fornavn"
        />
        <TextField
          required
          name="lastname"
          errorMsg="Mangler etternavn"
          value={lastname.value}
          valid={lastname.valid}
          onChange={onFormChange}
          placeholder="Etternavn"
        />
      </InnerFormContainer>
      <TextField
        required
        name="address"
        errorMsg="Mangler adresse"
        value={address.value}
        valid={address.valid}
        onChange={onFormChange}
        placeholder="Adresse"
      />
      <InnerFormContainer>
        <TextField
          required
          type="number"
          name="postcode"
          pattern="^[0-9]{4}$"
          errorMsg="Ugyldig postnummer"
          value={postcode.value}
          valid={postcode.valid}
          onChange={onFormChange}
          placeholder="Postnummer"
        />
        <TextField
          required
          name="county"
          errorMsg="Mangler fylke"
          value={county.value}
          valid={county.valid}
          onChange={onFormChange}
          placeholder="Fylke"
        />
      </InnerFormContainer>
      <InnerContainer>
        <Link to="/handlevogn">
          <DangerButton>Tilbake</DangerButton>
        </Link>
        <SuccessButton onClick={() => updateCurrentStep('payment')} disabled={!customerFormValid()}>
          Videre til betaling
        </SuccessButton>
      </InnerContainer>
    </Container>
  )
}

export default () => (
  <CheckoutContext.Consumer>{value => <CustomerForm checkoutContext={value} />}</CheckoutContext.Consumer>
)
