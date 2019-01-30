import React from 'react'
import type { CartProduct } from '../../dataTypes'

// $FlowFixMe
export const CartContext = React.createContext()

export type CartContextShape = {
  cartProducts: CartProduct[],
  addToCart: CartProduct => void,
  emptyCart: Function,
  removeCartItem: CartProduct => void,
  updateCartItemQuantity: (cartProduct: CartProduct, quantity: number) => void,
  getCartTotal: () => number
}

type Props = {
  children: React$Node
}

type State = {
  cartProducts: CartProduct[]
}

export class CartProvider extends React.Component<Props, State> {
  state = {
    cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')) || []
  }

  _updateCartProducts = cartProducts => {
    this.setState({ cartProducts })
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }

  _addToCart = product => {
    const cartProducts = this.state.cartProducts
    const indexOfExistingProduct = cartProducts.findIndex(existingProduct => existingProduct.sku === product.sku)

    if (indexOfExistingProduct !== -1) {
      if (cartProducts[indexOfExistingProduct].quantity < product.stock) {
        cartProducts[indexOfExistingProduct].quantity++
        this._updateCartProducts(cartProducts)
      }
    } else {
      product.quantity = 1
      cartProducts.push(product)
      this._updateCartProducts(cartProducts)
    }
  }

  _emptyCart = () => {
    this._updateCartProducts([])
  }

  _removeCartItem = ({ sku }) => {
    const cartProducts = this.state.cartProducts.filter(product => product.sku !== sku)
    this._updateCartProducts(cartProducts)
  }

  _updateCartItemQuantity = (product, quantity) => {
    const cartProducts = this.state.cartProducts
    const indexToUpdate = this.state.cartProducts.findIndex(cartProduct => cartProduct.sku === product.sku)
    cartProducts[indexToUpdate].quantity = quantity

    this._updateCartProducts(cartProducts)
  }

  _getCartTotal = () => {
    const cartTotal = this.state.cartProducts.reduce(
      (cartTotal, { price, quantity }) => cartTotal + price * quantity,
      0
    )
    return cartTotal >= 150 ? cartTotal : cartTotal + 29
  }

  render() {
    const value = {
      ...this.state,
      addToCart: this._addToCart,
      emptyCart: this._emptyCart,
      removeCartItem: this._removeCartItem,
      updateCartItemQuantity: this._updateCartItemQuantity,
      getCartTotal: this._getCartTotal
    }

    return <CartContext.Provider value={value}>{this.props.children}</CartContext.Provider>
  }
}
