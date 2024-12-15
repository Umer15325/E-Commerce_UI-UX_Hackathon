import React from 'react'
import Image from 'next/image'
import Products from '../../public/Products.png'
import Link from 'next/link'

const Homesec3
 = () => {
  return (
    <div className='big:w-[1420px] big:h-[670px] big:mt-[69px] lap:pl-[102px] lap:py-[44px] flex bg-[#FCF8F3] big:justify-between items-center lap:flex-row lap:px-0 
    mob:flex-col mob:py-[10px] mob:px-[5%] mob:gap-[20px]'>

        <div className='flex flex-col lap:gap-[25px] justify-center'>
            <div className='flex flex-col big:gap-[7px]'>
                <div className='big:text-[40px] font-[700] mob:text-center lap:text-left
                mob:text-[20px]'>50+ Beautiful rooms <br /> inspiration</div>
                <div className='big:text-[16px] font-[500] text-[#616161] hidden lap:block'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</div>
            </div>

                {/* for lap and big */}
            <Link href='/shop'><button className='text-[16px] font-[600] text-[#FFFFFF] w-[176px] h-[48px] bg-[#B88E2F] border border-[#B88E2F] lap:flex justify-center items-center hover:bg-white hover:text-[#B88E2F] hidden'>Explore More</button></Link>
        </div>

        <Image src={Products} alt='products' className='big:h-[582px] big:w-[876px]'/>

              {/* for mob and tab */}
        <Link href='/shop'><button className='text-[16px] font-[600] text-[#FFFFFF] w-[176px] h-[48px] bg-[#B88E2F] border border-[#B88E2F] mob:flex justify-center items-center hover:bg-white hover:text-[#B88E2F] lap:hidden'>Explore More</button></Link>

    </div>
  )
}

export default Homesec3
