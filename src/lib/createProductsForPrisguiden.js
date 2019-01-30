const fs = require('fs')
const path = require('path')
const products = require('../products.json')

const header = 'produktnavn;pris;URL;bildeURL;produktkategori;stock_status;produktbeskrivelse;\n\n'

const stringSitemap = products.reduce((acc, product) => {
  const { name, sku, categories, variants } = product
  const isOutOfStock = variants.map(({ stock }) => stock).every(stock => stock === 0)
  const url = `https://adaptere.no/produkter/${sku}`
  const imageUrl = `https://adaptere.no/productImages/${sku}.jpg`
  const stock = isOutOfStock ? 'not_in_stock' : 'in_stock'

  const productString =
    name +
    ';' +
    variants[0].price +
    ';' +
    url +
    ';' +
    imageUrl +
    ';' +
    categories[0] +
    ';' +
    stock +
    ';' +
    variants[0].description +
    ';\n\n'

  return acc + productString
}, '')

fs.writeFile(path.join(__dirname, '../../public/prisliste.txt'), header + stringSitemap, function(err) {
  if (err) {
    return console.log(err)
  }

  console.log('Product list generated')
})
