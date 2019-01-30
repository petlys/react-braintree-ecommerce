import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { spacing } from '../../styles'
import { ProductCard, ProductListHeader } from './'
import products from '../../products.json'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: ${spacing.md};
`

type Props = {
  category: string
}

export class ProductList extends React.Component<Props> {
  _renderProducts = () => {
    const categoryFilteredProducts = products.filter(product =>
      product.categories.some(category => category === this.props.category)
    )

    return categoryFilteredProducts.map(product => <ProductCard product={product} key={product.sku} />)
  }

  render() {
    const category = this.props.category

    return (
      <div>
        <Helmet>
          <title>Adaptere.no - {category.toUpperCase()}</title>
          <meta name="description" content={`${category.toUpperCase()} kabler, overganger og adaptere`} />
          <link rel="canonical" href={`https://adaptere.no/${category}`} />
          <meta property="og:title" content={`Adaptere.no - ${category.toUpperCase()}`} />
          <meta property="og:description" content={`${category.toUpperCase()} kabler, overganger og adaptere`} />
          <meta property="og:image" content="https://adaptere.no/thumbnail.png" />
          <meta property="og:url" content={`https://adaptere.no/${category}`} />
        </Helmet>

        <ProductListHeader />

        <Container>{this._renderProducts()}</Container>
      </div>
    )
  }
}

export default ProductList
