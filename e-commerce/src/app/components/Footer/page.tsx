
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
<div>
    <hr className='border-[1px] border-[#D9D9D9] big:w-[1420px] big:mb-[48px]'/>

    <div className='big:w-[1420px] big:h-[457px] big:px-[100px] flex flex-col big:gap-[48px] 
    mob:p-[5%] mob:gap-[20px]'>


        <div className='flex big:gap-[136px]
        mob:flex-col mob:gap-[20px]
        lap:flex-row lap:gap-[40px]'>
            {/* Logo */}
            <div className='flex flex-col big:gap-[50px]
            '>
                <div className='text-[24px] font-[700]'>Funiro.</div>
                <div className='text-[16px] font-[400] text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</div>
            </div>


    <div className='flex big:gap-[72px]
    mob:flex-col mob:gap-[20px]
    lap:flex-row lap:gap-[40px]'>
        <div className='flex big:gap-[144px]
        mob:justify-between
        lap:gap-[40px]'>
            {/* Links */}
            <div className='flex flex-col big:gap-[55px]
            mob:gap-[5px]'>
                <div className='text-[16px] font-[500] text-[#9F9F9F]'>Links</div>
                <div className='flex flex-col big:gap-[46px]'>
                <Link href='/' className='text-[16px] font-[500] hover:underline'>Home</Link>
                <Link href='/shop' className='text-[16px] font-[500] hover:underline'>Shop</Link>
                <Link href='/blog' className='text-[16px] font-[500] hover:underline'>Blog</Link>
                <Link href='/contact' className='text-[16px] font-[500] hover:underline'>Contact</Link>
                </div>
            </div>
            
            {/* Help */}
            <div className='flex flex-col big:gap-[50px]
            mob:gap-[5px]'>
            <div className='text-[16px] font-[500] text-[#9F9F9F]'>Help</div>
                <div className='flex flex-col big:gap-[46px]'>
                    <div className='text-[16px] font-[500] hover:underline hover:cursor-pointer'>Payment Options</div>
                    <div className='text-[16px] font-[500] hover:underline hover:cursor-pointer'>Returns</div>
                    <div className='text-[16px] font-[500] hover:underline hover:cursor-pointer'>Privacy Policies</div>
                </div>
            </div>
        </div>

                {/* News Letter */}
            <div className='flex flex-col big:gap-[50px]
            mob:gap-[10px]'>
                <div className='text-[16px] font-[500] text-[#9F9F9F]'>Newsletter</div>
                <div className='flex gap-[11px]
                '>
                    <input type="text" placeholder='Enter Your Email Address' className='underline text-[14px] font-[400] w-[200px]'/>
                    <button className='underline font-[500] hover:bg-black hover:text-white'>SUBSCRIBE</button>
                </div>
            </div>
    </div>
        </div>

            {/* Last */}
    <div className='flex flex-col big:gap-[35px]
    mob:gap-[20px]'>
        <hr className='border-[1px] border-[#D9D9D9] big:w-[1240px]'/>
        <div>2023 furino. All rights reverved</div>
    </div>

    </div>
</div>
  )
}

export default Footer
