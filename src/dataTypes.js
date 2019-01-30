type ProductVariant = {
  price: number,
  stock: number,
  variant: string,
  description: string
}

export type Product = {
  name: string,
  sku: string,
  categories: string[],
  featured?: boolean,
  variants: ProductVariant[]
}

export type CartProduct = {
  name: string,
  sku: string,
  price: number,
  stock: number,
  quantity: number
}
