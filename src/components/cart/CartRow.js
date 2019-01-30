import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { colors, radiuses, spacing, breakpoints, shadows } from '../../styles'
import { DeleteIcon } from '../icons'
import { IconButton, Select } from '../common'
import missingImg from '../../images/missing.png'

import type { CartProduct } from '../../dataTypes'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${shadows.DEFAULT};
  background-color: white;
  padding: 0 ${spacing.md};
  border-radius: ${radiuses.RADIUS_DEFAULT};

  :not(:first-child) {
    border-top: 2px solid ${colors.BACKGROUND};
  }

  > *:not(:first-child) {
    margin-left: ${spacing.md};
  }

  select {
    margin-left: ${spacing.sm};
  }

  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    font-size: smaller;
  }
`

const Name = styled.span`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    width: 50px;
    height: 50px;
  }
`

type Props = {
  product: CartProduct,
  updateCartItemQuantity: Function,
  removeCartItem: Function
}

export class CartRow extends React.Component<Props, {}> {
  _onQuantityChange = event => {
    this.props.updateCartItemQuantity(this.props.product, event.target.value)
  }

  _removeCartItem = () => {
    this.props.removeCartItem(this.props.product)
  }

  _renderQuantitySelect = () => {
    const { quantity, stock } = this.props.product
    let values = []

    for (let quantityOption = 1; quantityOption <= stock; quantityOption++) {
      values.push(quantityOption)
    }

    return <Select value={quantity} values={values} onChange={this._onQuantityChange} />
  }

  render() {
    const { name, sku, price, quantity } = this.props.product
    const totalPrice = price * quantity

    return (
      <Container className="animated zoomIn fast">
        <Image src={`/productImages/${sku}.jpg`} onError={evt => (evt.target.src = missingImg)} alt="Produktbilde" />

        <Name>{name}</Name>

        <div>
          <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>
            <span>Antall:</span>
          </MediaQuery>

          {this._renderQuantitySelect()}
        </div>

        <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>
          <span>{totalPrice} kr</span>
        </MediaQuery>

        <IconButton onClick={this._removeCartItem}>
          <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>
            <DeleteIcon color={colors.SECONDARY_TEXT} />
          </MediaQuery>
          <MediaQuery maxWidth={breakpoints.SMALL_AND_BELOW}>
            <DeleteIcon color={colors.SECONDARY_TEXT} size="25" />
          </MediaQuery>
        </IconButton>
      </Container>
    )
  }
}

export default CartRow
