
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
<div>
    <hr className='border-[1px] border-[#D9D9D9] w-[1420px] mb-[48px]'/>

    <div className='w-[1420px] h-[457px] px-[100px] flex flex-col gap-[48px] '>


        <div className='flex gap-[136px]'>
            <div className='flex flex-col gap-[50px]'>
                <div className='text-[24px] font-[700]'>Funiro.</div>
                <div className='text-[16px] font-[400] text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</div>
            </div>


    <div className='flex gap-[72px]'>
        <div className='flex gap-[144px]'>
            <div className='flex flex-col gap-[55px]'>
                <div className='text-[16px] font-[500] text-[#9F9F9F]'>Links</div>
                <div className='flex flex-col gap-[46px]'>
                <Link href='/' className='text-[16px] font-[500] hover:underline'>Home</Link>
                <Link href='/shop' className='text-[16px] font-[500] hover:underline'>Shop</Link>
                <Link href='/blog' className='text-[16px] font-[500] hover:underline'>Blog</Link>
                <Link href='/contact' className='text-[16px] font-[500] hover:underline'>Contact</Link>
                </div>
            </div>
            
            <div className='flex flex-col gap-[50px]'>
            <div className='text-[16px] font-[500] text-[#9F9F9F]'>Help</div>
                <div className='flex flex-col gap-[46px]'>
                    <div className='text-[16px] font-[500] hover:underline hover:cursor-pointer'>Payment Options</div>
                    <div className='text-[16px] font-[500] hover:underline hover:cursor-pointer'>Returns</div>
                    <div className='text-[16px] font-[500] hover:underline hover:cursor-pointer'>Privacy Policies</div>
                </div>
            </div>
        </div>

            <div className='flex flex-col gap-[50px]'>
                <div className='text-[16px] font-[500] text-[#9F9F9F]'>Newsletter</div>
                <div className='flex gap-[11px]'>
                    <input type="text" placeholder='Enter Your Email Address' className='underline text-[14px] font-[400]'/>
                    <button className='underline font-[500] hover:bg-black hover:text-white'>SUBSCRIBE</button>
                </div>
            </div>
    </div>
        </div>

    <div className='flex flex-col gap-[35px]'>
        <hr className='border-[1px] border-[#D9D9D9] w-[1240px]'/>
        <div>2023 furino. All rights reverved</div>
    </div>

    </div>
</div>
  )
}

export default Footer
