import React from 'react'
import HeaderNav from '../components/HeaderNav'
import Otziv from '../components/Otziv'
import ProductList from '../components/ProductList'

export default function Products() {
  return (
    <div className='Products'>
      <HeaderNav/>
      <ProductList />
      <Otziv/>
    </div>
  )
}
