import { makeObservable, action, observable, computed } from 'mobx'

class ProductsStore {
  products = [
    {id: 1, name: 'wewe', count: 1, max: 10 },
    {id: 2, name: 'efrferf', count: 5, max: 10 },
    {id: 3, name: 'frfrf', count: 6, max: 10 },
  ]

  constructor () {
    makeObservable(this, {
      products: observable,
      changeCount: action,
      deleteRow: action,
      allMax5: action,
      total: computed
    })
  }

  get total() {
    return this.products.reduce((val, product) => val + product.count * 1500, 0)
  }

  changeCount (id, count) {
    const index = this.products.findIndex(product => product.id === id)

    if (~index) {
      this.products[index].count = count
    }
  }

  allMax5 () {
    this.products.forEach(product => {
      product.max = 5
    })
  }

  deleteRow (id) {
    const index = this.products.findIndex(product => product.id === id)

    if (~index) {
      this.products.splice(index, 1)
    }
  }
}

export default new ProductsStore()
