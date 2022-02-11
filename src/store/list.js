import { makeObservable, action, observable, computed } from 'mobx'

class ListStore {
  products = [
    {id: 1, name: 'wewe', count: 1, max: 10 },
    {id: 2, name: 'efrferf', count: 5, max: 10 },
    {id: 3, name: 'frfrf', count: 6, max: 10 },
  ]

  getById = id => this.products.find(product => product.id === +id)

  constructor () {
    makeObservable(this, {
      products: observable,
    })
  }
}

export default new ListStore()
