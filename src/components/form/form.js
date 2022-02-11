import React from 'react'
import OrderStore from '@/store/order'
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom";
import { mapRoutes } from '@/router'

function Form () {
  return <div>
    <h1>Data</h1>
    <div>
      { OrderStore.fields.map(field => <div key={field.name}>
        <input
          type="text"
          placeholder={field.label}
          name={field.name}
          defaultValue={field.value}
          onChange={(e) => OrderStore.changeValue(field.name, e.target.value)}
        />
      </div>) }
    </div>

    <div>
      <Link to={mapRoutes.result}>
        <button disabled={!OrderStore.isValid}>Next</button>
      </Link>
    </div>
  </div>
}

export default observer(Form)
