import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { CartContext, type CartContextShape } from '../contexts'
import { SuccessButton, Select } from '../common'
import { CartIcon } from '../icons'
import { spacing, radiuses, breakpoints, colors, shadows } from '../../styles'
import Price from './Price'
import AddedToCartMessage from './AddedToCartMessage'

import missingImg from '../../images/missing.png'
import products from '../../products.json'

import type { Product } from '../../dataTypes'
import type { Match, RouterHistory } from 'react-router-dom'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${spacing.xl};
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    flex-direction: column;
    align-items: center;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    flex: 2;
    max-width: 400px;
  }

  > h1 {
    @media (min-width: ${breakpoints.SMALL_AND_BELOW}) {
      margin-top: 0;
    }
  }

  > small {
    margin-top: ${spacing.md};
    color: ${colors.SECONDARY_TEXT};
  }

  @media (min-width: ${breakpoints.SMALL_AND_ABOVE}) {
    margin-right: ${spacing.xl};
  }
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  > small {
    margin-bottom: ${spacing.sm};
  }
`

const Image = styled.img`
  border-radius: ${radiuses.RADIUS_DEFAULT};
  width: 350px;
  height: 350px;
  box-shadow: ${shadows.DEFAULT};
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    width: 300px;
    height: 300px;
  }
`

const ImageAndPriceContainer = styled.div`
  position: relative;
  @media (max-width: ${breakpoints.SMALL_AND_BELOW}) {
    order: -1;
  }
`

const AddToCartButton = styled(SuccessButton)`
  margin-top: ${spacing.md};
  max-width: 400px;
`

type Props = {
  cartContext: CartContextShape,
  history: RouterHistory,
  match: Match
}

type State = {
  showAddedToCartMessage: boolean,
  variantIndex: number
}

class ProductDetails extends React.Component<Props, State> {
  _productToRender: Product = products.find(product => product.sku === this.props.match.params.sku) || {}
  _timeoutRef: TimeoutID

  state = {
    showAddedToCartMessage: false,
    variantIndex: 0
  }

  _addToCart = () => {
    const { variantIndex } = this.state
    const { name, sku, variants } = this._productToRender
    const cartProductName = variants.length > 1 ? `${name} - ${variants[variantIndex].variant}` : name

    const cartProduct = {
      name: cartProductName,
      sku,
      price: variants[variantIndex].price,
      stock: variants[variantIndex].stock
    }

    // $FlowFixMe
    this.props.cartContext.addToCart(cartProduct)

    this.setState({ showAddedToCartMessage: true })

    this._timeoutRef = setTimeout(() => {
      this.setState({ showAddedToCartMessage: false })
    }, 1500)
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutRef)
  }

  render() {
    if (!this._productToRender) {
      this.props.history.push('/404')
      return null
    }

    const { showAddedToCartMessage, variantIndex } = this.state
    const { name, sku, variants } = this._productToRender
    const showVariantPicker = variants.length > 1
    const description = variants[variantIndex].description
    const price = variants[variantIndex].price
    const stock = variants[variantIndex].stock
    const variantValues = variants.map(variant => variant.variant)

    return (
      <div>
        <Helmet>
          <title>{name}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={`https://adaptere.no/produkter/${sku}`} />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={`https://adaptere.no/produkter/${sku}`} />
          <meta property="og:image" content={`/productImages/${sku}.jpg`} />
          <meta property="og:url" content={`https://adaptere.no/produkter/${sku}`} />
        </Helmet>

        <Container>
          <TextContainer className="animated fadeIn medium">
            <h1>{name}</h1>
            <p>{description}</p>

            {showVariantPicker && (
              <SelectContainer>
                <small>
                  <b>Variant:</b>
                </small>
                <Select
                  values={variantValues}
                  value={variantValues[variantIndex]}
                  onChange={evt => this.setState({ variantIndex: variantValues.indexOf(evt.target.value) })}
                />
              </SelectContainer>
            )}

            <small>{stock} igjen på lager</small>

            <AddToCartButton onClick={this._addToCart} disabled={stock === 0}>
              <CartIcon size="30" style={{ marginRight: spacing.sm }} color="white" />
              Legg i handlevogn
            </AddToCartButton>
          </TextContainer>
          <ImageAndPriceContainer className="animated fadeInRight medium">
            <Image
              src={`/productImages/${sku}.jpg`}
              onError={evt => (evt.target.src = missingImg)}
              alt="Produktbilde"
            />
            <Price price={price} isOutOfStock={stock === 0} isAlmostOutOfStock={stock < 2} />
          </ImageAndPriceContainer>

          {showAddedToCartMessage && <AddedToCartMessage />}
        </Container>
      </div>
    )
  }
}

const ProductDetailsWithRouter = withRouter(ProductDetails)

export default () => (
  <CartContext.Consumer>{value => <ProductDetailsWithRouter cartContext={value} />}</CartContext.Consumer>
)
