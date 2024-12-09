import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero pt-[157.3px]'>

        <div className='big:w-[643px] h-[443px] bg-[#FFF3E3] m-[0px_58px_116.53px_739px] 
        p-[62px_43px_37px_39px] border rounded-[10px]'>

            <div className='text-[16px] font-[600] mb-[4px]'>New Arrival</div>
            <div className='text-[52px] font-[700] text-[#B88E2F] mb-[17px] leading-[65px]'>Discover Our New Collection</div>
            <div className='text-[18px] font-[500] mb-[46px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
            <Link href='/shop'><button className='bg-[#B88E2F] p-[25px_72px] text-[16px] font-[600] text-[#FFFFFF] w-[222px] h-[74px] hover:bg-white hover:text-[#B88E2F] hover:border border-[#B88E2F]'>BUY NOW</button></Link>

        </div>

    </div>
  )
}

export default Hero