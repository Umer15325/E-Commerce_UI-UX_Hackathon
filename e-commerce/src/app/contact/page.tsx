import React from 'react'
import ContactHero from '../components/ContactHero/page'
import ContactSec from '../components/ContactSec/page'
import PinkBar from '../components/PinkBar/page'

const contact = () => {
  return (
    <div>
        <ContactHero/>
        <ContactSec/>
        <PinkBar/>
        <div className='h-[30px]'></div>
    </div>
  )
}

export default contact