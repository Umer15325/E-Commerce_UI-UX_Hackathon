import React from 'react'
import CartHero from '../components/CartHero/page'
import Cartsec1 from '../components/Cart-sec1/page'
import PinkBar from '../components/PinkBar/page'


const cart = () => {
  return (
    <div>
        <CartHero/>
        <Cartsec1/>
        <div className='h-[22px]'></div>
        <PinkBar/>
        <div className='h-[8px]'></div>
    </div>
  )
}

export default cart