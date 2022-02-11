// import List from '@/components/list/list'
// import Products from '@/components/products/products'
// import Product from '@/components/product/product'
// import Result from '@/components/result/result'
// import Form from '@/components/form/form'
import React from 'react'
const List = React.lazy(() => import(/* webpackChunkName: "list" */ '@/components/list/list'))
const Products = React.lazy(() => import(/* webpackChunkName: "products" */ '@/components/products/products'))
const Product = React.lazy(() => import(/* webpackChunkName: "product" */ '@/components/product/product'))
const Result = React.lazy(() => import(/* webpackChunkName: "result" */ '@/components/result/result'))
const Form = React.lazy(() => import(/* webpackChunkName: "form" */ '@/components/form/form'))

const routes = [
  {
    name: 'form',
    path: '/form',
    component: Form
  },
  {
    name: 'list',
    path: '/',
    component: List
  },
  {
    name: 'result',
    path: '/result',
    component: Result
  },
  {
    name: 'products',
    path: '/products',
    component: Products
  },
  {
    name: 'product',
    path: '/product/:id',
    component: Product
  },
]

const mapRoutes = routes.reduce((acc, route) => {
  if (route.name) {
    acc[route.name] = route.path
  }

  return acc
}, {})

export { routes, mapRoutes }
