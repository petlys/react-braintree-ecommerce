import React from 'react'
import styled from 'styled-components'
import { CartContext, CheckoutContext, type CartContextShape } from '../contexts'
import { colors } from '../../styles'
import { CheckmarkIcon } from '../icons'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    margin-bottom: 0;
  }
`

type Props = {
  cartContext: CartContextShape,
  checkoutContext: Object
}

class PaymentCompleted extends React.Component<Props, {}> {
  componentDidMount() {
    const cartProducts = this.props.cartContext.cartProducts.reduce(
      (accumulator, product) => accumulator + `${product.quantity}x ${product.name}</br>`,
      ''
    )

    const { firstname, lastname, address, postcode, county, email } = this.props.checkoutContext

    const formData = new FormData()
    formData.append('products', cartProducts)
    formData.append('firstname', firstname.value)
    formData.append('lastname', lastname.value)
    formData.append('address', address.value)
    formData.append('postcode', postcode.value)
    formData.append('county', county.value)
    formData.append('email', email.value)

    fetch('/sendMail.php', {
      cache: 'no-store',
      method: 'POST',
      body: formData
    }).catch(error => window.Sentry.captureException(error))
  }

  componentWillUnmount() {
    this.props.checkoutContext.updateCurrentStep('customer')
    this.props.cartContext.emptyCart()
  }

  render() {
    return (
      <Container>
        <CheckmarkIcon size="150" color={colors.GREEN} className="animated bounceIn" />
        <h2>Takk for din bestilling!</h2>
        <p>Du vil straks motta en bestillingsbekreftelse på epost.</p>
      </Container>
    )
  }
}

export default () => (
  <CartContext.Consumer>
    {cartContext => (
      <CheckoutContext.Consumer>
        {checkoutContext => <PaymentCompleted cartContext={cartContext} checkoutContext={checkoutContext} />}
      </CheckoutContext.Consumer>
    )}
  </CartContext.Consumer>
)
