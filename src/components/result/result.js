import React from 'react';
import OrderStore from '@/store/order';
import ProductsStore from '@/store/products';
import { observer } from 'mobx-react-lite';

function Result() {
  return (
    <div>
      <h1>
        Super
        {OrderStore.userName}
      </h1>

      <div>
        total
        {' '}
        {ProductsStore.total}
      </div>
    </div>
  );
}

export default observer(Result);
