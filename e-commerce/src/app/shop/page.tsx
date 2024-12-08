import React from 'react'
import ShopHero from '../components/ShopHero/page'
import ProductsRow from '../components/ProductsRow/page'
import ShopEndBar from '../components/ShopEndBar/page'

const shop = () => {
  return (
    <div>
        <ShopHero/>
        <ProductsRow/>
        <ProductsRow/>
        <ProductsRow/>
        <ProductsRow/>
        <ShopEndBar/>
    </div>
  )
}

export default shop