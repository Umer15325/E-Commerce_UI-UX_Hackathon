import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero big:pt-[157.3px] big:block big:p-0
    mob:flex mob:justify-center mob:items-center mob:px-[10%] mob:py-[5%]
    tab:pl-[40%]
    lap:pl-[50%]'>

          {/* Pink box */}
        <div className='big:w-[643px] big:h-[443px] bg-[#FFF3E3] big:m-[0px_58px_116.53px_739px] 
        big:p-[62px_43px_37px_39px] border rounded-[10px] big:block
        mob:p-[5%] mob:flex mob:flex-col mob:gap-[20px]'>

            <div className='big:text-[16px] font-[600] big:mb-[4px]'>New Arrival</div>

            <div className='big:text-[52px] font-[700] text-[#B88E2F] big:mb-[17px] big:leading-[65px]
            mob:text-[34px]'>Discover Our <br /> New Collection</div>

            <div className='big:text-[18px] font-[500] big:mb-[46px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>

            <Link href='/shop'>
              <button className='bg-[#B88E2F] big:p-[25px_72px] big:text-[16px] font-[600] text-[#FFFFFF] big:w-[222px] big:h-[74px] hover:bg-white hover:text-[#B88E2F] hover:border border-[#B88E2F]
              mob:w-[140px] mob:h-[40px]'>BUY NOW</button>
            </Link>

        </div>

    </div>
  )
}

export default Hero