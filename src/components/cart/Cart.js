import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import MediaQuery from 'react-responsive'
import { CartContext, type CartContextShape } from '../contexts'
import CartRow from './CartRow'
import EmptyCart from './EmptyCart'
import { CreditCardIcon, EmptyCartIcon } from '../icons'
import { SuccessButton, DangerButton } from '../common'
import { spacing, breakpoints } from '../../styles'

const Container = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: ${spacing.md};
  button:first-child {
    margin-right: ${spacing.md};
  }
`

const Sum = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.md} 0;

  > span {
    display: flex;
    align-items: center;

    b {
      margin-left: ${spacing.xs};
    }
  }
`

type Props = {
  cartContext: CartContextShape
}

class Cart extends React.Component<Props, {}> {
  _renderCartRows() {
    const { updateCartItemQuantity, removeCartItem, cartProducts } = this.props.cartContext

    return cartProducts.map(cartProduct => (
      <CartRow
        product={cartProduct}
        updateCartItemQuantity={updateCartItemQuantity}
        removeCartItem={removeCartItem}
        key={cartProduct.sku}
      />
    ))
  }

  render() {
    const { cartProducts, emptyCart, getCartTotal } = this.props.cartContext
    const cartIsEmpty = cartProducts.length === 0
    const cartTotal = getCartTotal()
    const freeShipping = cartTotal >= 150

    if (cartIsEmpty) return <EmptyCart />

    return (
      <Container>
        <Helmet>
          <title>Adaptere.no - Handlevogn</title>
          <meta name="description" content="Handlevogn" />
          <link rel="canonical" href="https://adaptere.no/handlevogn" />
          <meta property="og:title" content="Adaptere.no - Handlevogn" />
          <meta property="og:description" content="Handlevogn" />
          <meta property="og:image" content="https://adaptere.no/thumbnail.png" />
          <meta property="og:url" content="https://adaptere.no/handlevogn" />
        </Helmet>

        {this._renderCartRows()}

        <ButtonsContainer>
          <DangerButton onClick={emptyCart}>
            <MediaQuery maxWidth={breakpoints.SMALL_AND_BELOW}>
              <EmptyCartIcon color="white" size="25" />
            </MediaQuery>
            <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>Tøm handlevogn</MediaQuery>
          </DangerButton>
          <Link to="/kasse">
            <SuccessButton>
              <MediaQuery maxWidth={breakpoints.SMALL_AND_BELOW}>
                <CreditCardIcon color="white" size="25" />
              </MediaQuery>
              <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>Til kasse</MediaQuery>
            </SuccessButton>
          </Link>
          <Sum>
            {!freeShipping && (
              <span>
                Frakt: <b>29 Kr</b>
              </span>
            )}
            <span>
              Totalt: <b>{cartTotal} Kr</b>
            </span>
          </Sum>
        </ButtonsContainer>
      </Container>
    )
  }
}

export default () => <CartContext.Consumer>{cartContext => <Cart cartContext={cartContext} />}</CartContext.Consumer>
