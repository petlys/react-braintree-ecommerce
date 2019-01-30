import React from 'react'
import { CartProvider, CheckoutProvider } from './components/contexts'

const AppProvider = ({ children }: any) => {
  return (
    <CartProvider>
      <CheckoutProvider>{children}</CheckoutProvider>
    </CartProvider>
  )
}

export default AppProvider
