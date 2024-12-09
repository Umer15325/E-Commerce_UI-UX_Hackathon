import React from 'react'
import { MdOutlineNavigateNext } from 'react-icons/md'
// import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import logo from '../../public/logo.png'



const CartHero = () => {
  return (

        <div className='hero2 flex flex-col justify-center items-center'>

 
            <Image src={logo} alt='LOGO' className='w-[50px] h-[32px]'/>
            <br />

            <div className='text-[48px] font-[500]'>Cart</div>

            <div className='flex gap-[6px] items-center'>
                <div className='text-[16px] font-[500]'>Home</div>
                <MdOutlineNavigateNext className='w-[20px] h-[20px]'/>
                <div className='text-[16px] font-[300]'>Cart</div>
            </div>


        </div>
  )
}

export default CartHero