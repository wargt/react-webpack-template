import React from 'react';
import ReactDom from 'react-dom';
import "@/assets/main.css";
import App from './App'
import storeContext from './context/store'
import orderStore from "@/store/order";
import productsStore from "@/store/products";
import listStore from "@/store/list";

const store = {
  order: orderStore,
  products: productsStore,
  list: listStore
}

ReactDom.render(
  <storeContext.Provider value={store}>
    <App />
  </storeContext.Provider>,
  document.querySelector('.app')
)


