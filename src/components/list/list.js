import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import store from '@/context/store';
import { Link } from 'react-router-dom';
import styles from './style.m.scss';

function List() {
  const { list } = useContext(store);

  return (
    <div className={styles.cnt}>
      { list.products.map((product) => (
        <div key={product.id} className="item">
          <div>
            name:
            {product.name}
          </div>
          <div>
            count:
            {product.count}
          </div>
          <div>
            max:
            {product.max}
          </div>
          <Link to={`/product/${product.id}`}>Go go</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default observer(List);
