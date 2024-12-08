import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import logo from '../../public/logo.png'
import acc from '../../public/acc.png'
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';


const montserrat = Montserrat({
    subsets: ['latin'], 
    weight: ['400', '700'], 
    variable: '--font-montserrat', 
  });

const Header = () => {
  return (

    <div className='big:h-[100px] pl-[54px] pt-[29px] pr-[100px] pb-[30px]'>
        {/* Header */}
        <div className='big:w-[1286px] h-[41px] flex items-center justify-between'>

            {/* Logo */}
            <div className='flex w-[185px] justify-between items-center'>
                <Image src={logo} alt='LOGO' className='w-[50px] h-[32px]'/>
                <div className={`${montserrat.className} text-[34px] font-[700]`}>Furniro</div>
            </div>

            {/* Routes */}
            <div className='flex text-[16px] font-[500] w-[430px] justify-between items-center'>
                <Link href='#'>Home</Link>
                <Link href='#'>Shop</Link>
                <Link href='#'>Blog</Link>
                <Link href='#'>Contact</Link>
            </div>

            {/* Icons */}
            <div className='flex w-[247px] justify-between items-center'>
                <Image src={acc} alt='acc' className='w-[28px] h-[28px]'/>
                <CiSearch  className='w-[28px] h-[28px]'/>
                <IoIosHeartEmpty  className='w-[28px] h-[28px]'/>
                <AiOutlineShoppingCart  className='w-[28px] h-[28px]'/>
            </div>
        </div>

    </div>
  )
}

export default Header