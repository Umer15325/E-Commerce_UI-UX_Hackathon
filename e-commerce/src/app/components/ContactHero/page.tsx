import React from 'react'
import { MdOutlineNavigateNext } from 'react-icons/md'
import Image from 'next/image';
import logo from '../../public/logo.png'



const ContactHero = () => {
  return (

        <div className='hero2 flex flex-col justify-center items-center'>

 
            <Image src={logo} alt='LOGO' className='w-[50px] h-[32px]'/>
            <br />

            <div className='text-[48px] font-[500]'>Contact</div>

            <div className='flex gap-[6px] items-center'>
                <div className='text-[16px] font-[500]'>Home</div>
                <MdOutlineNavigateNext className='w-[20px] h-[20px]'/>
                <div className='text-[16px] font-[300]'>Contact</div>
            </div>


        </div>
  )
}

export default ContactHero