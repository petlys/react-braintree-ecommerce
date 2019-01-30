import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { spacing, radiuses, breakpoints, colors, shadows } from '../../styles'
import { Price } from './'
import missingImg from '../../images/missing.png'

import type { Product } from '../../dataTypes'

const Container = styled(Link)`
  position: relative;
  margin: ${spacing.lg};
  background-color: white;
  border-radius: ${radiuses.RADIUS_DEFAULT};
  color: ${colors.SECONDARY_TEXT};
  box-shadow: ${shadows.DEFAULT};
  width: 230px;
  min-height: 250px;
  transition: 200ms;
  cursor: pointer;
  text-align: center;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    margin: ${spacing.lg} ${spacing.md};
  }
`

const Image = styled.img`
  width: 100%;
  height: 230px;
  border-top-left-radius: ${radiuses.RADIUS_DEFAULT};
  border-top-right-radius: ${radiuses.RADIUS_DEFAULT};
  border-bottom: 2px solid ${colors.BACKGROUND};
`

const Title = styled.p`
  margin: ${spacing.sm};
  line-height: 1.5;
`

type Props = {
  product: Product
}

export const ProductCard = (props: Props) => {
  const { name, sku, variants } = props.product
  const isOutOfStock = variants.map(({ stock }) => stock).every(stock => stock === 0)
  const isAlmostOutOfStock = variants.map(({ stock }) => stock).some(stock => stock < 2)

  return (
    <Container to={`/produkter/${sku}`}>
      <Image
        src={`/productImages/${sku}.jpg`}
        onError={evt => (evt.target.src = missingImg)}
        alt={name}
        className="animated zoomIn medium"
      />
      <Title>{name}</Title>
      <Price price={variants[0].price} isOutOfStock={isOutOfStock} isAlmostOutOfStock={isAlmostOutOfStock} />
    </Container>
  )
}

export default ProductCard
