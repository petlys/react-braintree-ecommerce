import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContext, type CartContextShape } from '../contexts'
import { CartIcon } from '../icons'
import { spacing, breakpoints } from '../../styles'

const Container = styled.div`
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: ${spacing.sm};
    margin-top: ${spacing.sm};
  }
`

const StyledLink = styled(Link)`
  margin-left: ${spacing.md};
  display: flex;
  align-items: center;
  color: white;
  transition: 400ms;
`

type Props = {
  cartContext: CartContextShape
}

const Cart = (props: Props) => (
  <Container>
    <StyledLink to="/handlevogn">
      <CartIcon color="white" />
      <span>{props.cartContext.cartProducts.length}</span>
    </StyledLink>
  </Container>
)

export default () => <CartContext.Consumer>{value => <Cart cartContext={value} />}</CartContext.Consumer>
