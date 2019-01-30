import React from 'react'

// $FlowFixMe
export const CheckoutContext = React.createContext()

export type CheckoutContextShape = {
  email: { value: string, valid: boolean },
  firstname: { value: string, valid: boolean },
  lastname: { value: string, valid: boolean },
  address: { value: string, valid: boolean },
  county: { value: string, valid: boolean },
  postcode: { value: '', valid: false },
  currentStep: 'customer' | 'payment' | 'completed',
  customerFormValid: () => void,
  updateCurrentStep: ('customer' | 'payment' | 'completed') => void,
  onFormChange: (name: string, value: string, valid: boolean) => void
}

type Props = {
  children: React$Node
}

type State = {
  email: {
    value: string,
    valid: boolean
  },

  firstname: {
    value: string,
    valid: boolean
  },

  lastname: {
    value: string,
    valid: boolean
  },

  address: {
    value: string,
    valid: boolean
  },

  county: {
    value: string,
    valid: boolean
  },

  postcode: {
    value: string,
    valid: boolean
  },

  currentStep: 'customer' | 'payment' | 'completed'
}

export class CheckoutProvider extends React.Component<Props, State> {
  state = {
    email: {
      value: '',
      valid: false
    },

    firstname: {
      value: '',
      valid: false
    },

    lastname: {
      value: '',
      valid: false
    },

    address: {
      value: '',
      valid: false
    },

    county: {
      value: '',
      valid: false
    },

    postcode: {
      value: '',
      valid: false
    },

    currentStep: 'customer'
  }

  _customerFormValid = () => {
    const { email, firstname, lastname, address, county, postcode } = this.state
    return email.valid && firstname.valid && lastname.valid && address.valid && county.valid && postcode.valid
  }

  _updateCurrentStep = (currentStep: 'customer' | 'payment' | 'completed') => {
    this.setState({ currentStep })
  }

  _onFormChange = (name: string, value: string, valid: boolean) => {
    this.setState({ [name]: { value, valid } })
  }

  render() {
    const value = {
      ...this.state,
      customerFormValid: this._customerFormValid,
      updateCurrentStep: this._updateCurrentStep,
      onFormChange: this._onFormChange
    }

    return <CheckoutContext.Provider value={value}>{this.props.children}</CheckoutContext.Provider>
  }
}
