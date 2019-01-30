import React from 'react'
import styled from 'styled-components'
import braintree from 'braintree-web-drop-in'
import { Loading, SuccessButton, DangerButton, Alert } from '../common'
import { spacing } from '../../styles'
import { CartContext, CheckoutContext, type CartContextShape, type CheckoutContextShape } from '../contexts'

const PaymentAlert = styled(Alert)`
  margin-top: -${spacing.lg};
  margin-bottom: ${spacing.lg};
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.md};
`

type Props = {
  cartContext: CartContextShape,
  checkoutContext: CheckoutContextShape
}

type State = {
  loading: boolean,
  error: ?'loadingError' | 'paymentError',
  readyToSubmit: boolean
}

class PaymentForm extends React.Component<Props, State> {
  _braintreeInstance: Object

  _timeoutRef: TimeoutID

  state = {
    loading: true,
    error: null,
    readyToSubmit: false
  }

  componentDidMount() {
    braintree.create(
      {
        authorization: 'production_pypczjg7_x3xrsm597w5v29hc',
        container: '#payment-container',
        locale: 'no_NO',
        paypal: {
          flow: 'checkout',
          amount: this.props.cartContext.getCartTotal(),
          currency: 'NOK'
        }
      },
      (error, instance) => {
        if (error) window.Sentry.captureException(error)

        this._braintreeInstance = instance

        this._braintreeInstance.on('paymentMethodRequestable', () => {
          this.setState({ readyToSubmit: true })
        })

        this._braintreeInstance.on('noPaymentMethodRequestable', () => {
          this.setState({ readyToSubmit: false })
        })

        this.setState({
          loading: false,
          error: error ? 'loadingError' : null,
          readyToSubmit: this._braintreeInstance.isPaymentMethodRequestable()
        })
      }
    )
  }

  _doPayment = async () => {
    try {
      const { nonce } = await this._braintreeInstance.requestPaymentMethod()

      const formData = new FormData()
      formData.append('nonce', nonce)
      formData.append('amount', String(this.props.cartContext.getCartTotal()))

      this.setState({ loading: true })

      const response = await fetch('/doPayment.php', {
        cache: 'no-store',
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const responseJson = await response.json()
        throw new Error(`Failed to perform payment. Message: ${responseJson.message}`)
      } else {
        this.props.checkoutContext.updateCurrentStep('completed')
      }
    } catch (error) {
      window.Sentry.captureException(error)

      this._braintreeInstance.clearSelectedPaymentMethod()

      this.setState({ error: 'paymentError', loading: false })
    }
  }

  render() {
    const { loading, error, readyToSubmit } = this.state

    return (
      <div>
        {error === 'loadingError' && (
          <PaymentAlert className="animated zoomIn medium">
            Huff da, her gikk visst noe galt. Vennligst prøv igjen senere.
          </PaymentAlert>
        )}

        {error === 'paymentError' && (
          <PaymentAlert className="animated zoomIn medium">
            Huff da, her gikk visst noe galt. Vennligst sjekk at det er dekning på konto.
          </PaymentAlert>
        )}

        <div id="payment-container" />

        {loading ? (
          <Loading />
        ) : (
          <ButtonContainer>
            <DangerButton onClick={() => this.props.checkoutContext.updateCurrentStep('customer')}>
              Tilbake
            </DangerButton>
            <SuccessButton id="submit-button" onClick={this._doPayment} disabled={!readyToSubmit}>
              Fullfør ordre
            </SuccessButton>
          </ButtonContainer>
        )}
      </div>
    )
  }
}

export default () => (
  <CartContext.Consumer>
    {cartContext => (
      <CheckoutContext.Consumer>
        {checkoutContext => <PaymentForm cartContext={cartContext} checkoutContext={checkoutContext} />}
      </CheckoutContext.Consumer>
    )}
  </CartContext.Consumer>
)
