import axios from 'axios'

export class ProductService {
  URL = 'http://localhost:8081/api/'
  getProductsSmall() {
    return fetch('/demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
      .then((res) => res.json())
      .then((d) => d.data)
  }

  async getProducts() {
    let response
    await axios.get(this.URL + 'bookings/').then((res) => (response = res.data))

    return response
  }

  getProductsMixed() {
    return fetch('/demo/data/products-mixed.json', { headers: { 'Cache-Control': 'no-cache' } })
      .then((res) => res.json())
      .then((d) => d.data)
  }

  getProductsWithOrdersSmall() {
    return fetch('/demo/data/products-orders-small.json', {
      headers: { 'Cache-Control': 'no-cache' }
    })
      .then((res) => res.json())
      .then((d) => d.data)
  }

  getProductsWithOrdersLarge() {
    return fetch('/demo/data/products-orders.json', { headers: { 'Cache-Control': 'no-cache' } })
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
