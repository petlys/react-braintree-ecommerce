import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import ProductCard from './ProductCard'
import ProductListHeader from './ProductListHeader'
import { spacing, breakpoints, radiuses, shadows } from '../../styles'
import bannerImage from '../../images/banner.png'
import products from '../../products.json'
import type { Product } from '../../dataTypes'

const Container = styled.div`
  max-width: 1150px;
  margin: ${spacing.lg} auto;

  > *:first-child {
    margin-top: -${spacing.lg};
  }
`

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`

const Image = styled.img`
  width: 100%;
  max-width: 1150px;
  height: auto;
  border-radius: ${radiuses.RADIUS_DEFAULT};
  box-shadow: ${shadows.DEFAULT};
`

export const FrontPage = () => {
  const featuredProducts = products.filter((product: Product) => product.featured)

  return (
    <Container>
      <ProductListHeader hideShippingLabel />

      <MediaQuery minWidth={breakpoints.SMALL_AND_ABOVE}>
        <Link to="/produkter/kompositt-til-hdmi-konverter">
          <Image src={bannerImage} alt="header" />
        </Link>
      </MediaQuery>

      <h1>Mest solgte</h1>

      <ProductContainer>
        {featuredProducts.map(product => (
          <ProductCard product={product} />
        ))}
      </ProductContainer>
    </Container>
  )
}
