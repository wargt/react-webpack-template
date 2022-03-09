import React from 'react';
import ReactDom from 'react-dom';
import '@/assets/main.css';
import orderStore from '@/store/order';
import productsStore from '@/store/products';
import listStore from '@/store/list';
import storeContext from './context/store';
import App from './App';
import { hello } from './hello.ts';

// eslint-disable-next-line no-console
console.log(hello('23'));

const store = {
  order: orderStore,
  products: productsStore,
  list: listStore,
};

ReactDom.render(
  <storeContext.Provider value={store}>
    <App />
  </storeContext.Provider>,
  document.querySelector('.app'),
);
