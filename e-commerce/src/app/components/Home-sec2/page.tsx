import React from 'react'
import ProductsRow from '../ProductsRow/page'
import Link from 'next/link'

const Homesec2 = () => {
  return (
    <div className='big:w-[1236px] big:h-[1084px] big:mt-[56px] big:mx-[102px] flex flex-col big:gap-[32px] items-center
    mob:mt-[10%]'>
                {/* heading */}
        <div className='lap:text-[40px] font-[700]
        mob:text-[24px] mob:mb-[20px]'>Our Products</div>

                {/* firts row */}
            <ProductsRow/>


            {/* second row */}
            <ProductsRow/>

                {/* button */}
        <Link href='/shop'><button className='text-[16px] font-[600] w-[245px] h-[48px] p-[12px_74px] border-[1px] border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white
        mob:mt-[20px]'>Show More</button></Link>

    </div>
  )
}

export default Homesec2