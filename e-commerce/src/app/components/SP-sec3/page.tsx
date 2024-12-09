import React from 'react'
import ProductsRow from '../ProductsRow/page'
import Link from 'next/link'

const SPsec3 = () => {
  return (
    <div className='h-[777px] flex flex-col items-center gap-[26px] pb-[104px] pt-[55px]'>

        <div className='text-[36px] font-[500]'>Related Products</div>

<div className='flex flex-col items-center'>
        <ProductsRow/>

        <Link href='/shop'><button className='text-[16px] font-[600] w-[245px] h-[48px] p-[12px_74px] border-[1px] border-[#B88E2F] text-[#B88E2F] mt-[4px] hover:bg-[#B88E2F] hover:text-white'>Show More</button></Link>

</div>

    </div>
  )
}

export default SPsec3