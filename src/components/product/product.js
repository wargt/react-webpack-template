import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import store from '@/context/store'

function Product () {
  const { id } = useParams()
  const { list } = useContext(store)
  const product = list.getById(id)

  if (!product) {
    return <div>404</div>
  }

  return <div>
    product {id}
  </div>
}
export default Product
