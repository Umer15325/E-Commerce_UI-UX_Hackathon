import React from 'react'
import ProductsRow from '../ProductsRow/page'
import Link from 'next/link'

const Homesec2 = () => {
  return (
    <div className='w-[1236px] h-[1084px] mt-[56px] mx-[102px] flex flex-col gap-[32px] items-center'>
                {/* heading */}
        <div className='text-[40px] font-[700]'>Our Products</div>

                {/* firts row */}
            <ProductsRow/>


            {/* second row */}
            <ProductsRow/>

                {/* button */}
        <Link href='/shop'><button className='text-[16px] font-[600] w-[245px] h-[48px] p-[12px_74px] border-[1px] border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white'>Show More</button></Link>

    </div>
  )
}

export default Homesec2