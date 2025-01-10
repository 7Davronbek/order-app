import React from 'react'
import ProductInfo from '../Components/Products/ProductInfo'
import ProductList from '../Components/ProductList'

export default function Products() {
  return (
    <div className='Products'>
      <ProductList />
      <ProductInfo/>
    </div>
  )
}
