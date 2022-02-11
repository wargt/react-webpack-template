import React from "react";
import Counter from '@/components/counter/counter';
import ProductsStore from '@/store/products'
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom";
import { mapRoutes } from '@/router'
import styles from './style.m.css'

function Products () {
  return (
    <div className={styles.table}>
      <table border={1}>
        <thead>
        <tr>
          <th>name</th>
          <th>count</th>
          <th>max</th>
          <th>total</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {ProductsStore.products.map(product => (
          <tr key={product.id}>
            <td>
              {product.name}
            </td>
            <td>
              {product.count}
              <Counter
                max={product.max}
                count={product.count}
                onChange={count => ProductsStore.changeCount(product.id , count)} />
            </td>
            <td>{product.max}</td>
            <td>
              {product.count * 1500}
            </td>
            <td>
              <button onClick={() => ProductsStore.deleteRow(product.id)}>delete</button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={5}>
            total {ProductsStore.total}
          </td>
        </tr>
        </tbody>
      </table>

      <div>
        <button onClick={() => ProductsStore.allMax5()}>allMax5</button>
      </div>

      <div>
        <Link to={mapRoutes.form}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  )
}

export default observer(Products)
