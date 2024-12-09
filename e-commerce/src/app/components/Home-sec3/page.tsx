import React from 'react'
import Image from 'next/image'
import Products from '../../public/Products.png'
import Link from 'next/link'

const Homesec3
 = () => {
  return (
    <div className='w-[1420px] h-[670px] mt-[69px] pl-[102px] flex bg-[#FCF8F3] justify-between items-center'>

        <div className='flex flex-col gap-[25px] justify-center'>
            <div className='flex flex-col gap-[7px]'>
                <div className='text-[40px] font-[700]'>50+ Beautiful rooms <br /> inspiration</div>
                <div className='text-[16px] font-[500] text-[#616161]'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</div>
            </div>

            <Link href='/shop'><button className='text-[16px] font-[600] text-[#FFFFFF] w-[176px] h-[48px] bg-[#B88E2F] border border-[#B88E2F] flex justify-center items-center hover:bg-white hover:text-[#B88E2F]'>Explore More</button></Link>
        </div>

        <Image src={Products} alt='products' className='h-[582px] w-[876px]'/>

    </div>
  )
}

export default Homesec3
