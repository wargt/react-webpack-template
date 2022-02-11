import { makeObservable, action, observable, computed } from 'mobx'

class OrderStore {
  fields = [
    { label: 'Name', value: '', name: 'name' },
    { label: 'Email', value: '', name: 'email' },
    { label: 'Phone', value: '', name: 'phone' },
  ]

  constructor () {
    makeObservable(this,{
      fields: observable,
      isValid: computed,
      userName: computed,
      changeValue: action
    })
  }

  get isValid () {
    return this.fields.every(field => field.value !== '')
  }

  get userName () {
    return this.fields.find(f => f.name === 'name').value
  }

  changeValue (name, value) {
    const field = this.fields.find(field => field.name === name)

    if (field) {
      field.value = value
    }
  }
}

export default new OrderStore()
