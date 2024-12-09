import React from 'react'
import SPbar from '../components/SPbar/page'
import SPsec1 from '../components/SP-sec1/page'
import SPsec2 from '../components/SP-sec2/page'
import SPsec3 from '../components/SP-sec3/page'

const singleProduct = () => {
  return (
    <div>
        <SPbar/>
        <SPsec1/>
        <hr className='border border-[#D9D9D9]'/>
        <SPsec2/>
        <hr className='border border-[#D9D9D9]'/>
        <SPsec3/>
    </div>
  )
}

export default singleProduct