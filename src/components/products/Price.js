import React from 'react'
import styled from 'styled-components'
import { colors, shadows } from '../../styles'
import { EmptyCartIcon } from '../icons'

type PriceProps = {
  price: number,
  isOutOfStock: boolean,
  isAlmostOutOfStock: boolean,
  style?: Object
}

const Container = styled.div`
  position: absolute;
  background-color: ${props => props.color};
  top: -17px;
  left: -17px;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  color: white;
  z-index: 1;
  font-size: larger;
  box-shadow: ${shadows.DEFAULT};
`

const PriceText = styled.b`
  margin: 0;
`

export const Price = (props: PriceProps) => {
  const color = props.isOutOfStock ? colors.RED : props.isAlmostOutOfStock ? colors.YELLOW : colors.GREEN

  return (
    <Container color={color} style={props.style} className="centerFlex">
      {color === colors.RED ? <EmptyCartIcon size="30" color="white" /> : <PriceText>{props.price},-</PriceText>}
    </Container>
  )
}

export default Price
