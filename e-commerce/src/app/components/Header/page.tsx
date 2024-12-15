import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty, IoMdMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { BsPersonExclamation } from 'react-icons/bs';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const montserrat = Montserrat({
    subsets: ['latin'], 
    weight: ['400', '700'], 
    variable: '--font-montserrat', 
  });

const Header = () => {
  return (

    <div className='big:h-[100px] big:pl-[54px] big:pt-[29px] big:pr-[100px] big:pb-[30px]
    mob:flex mob:justify-between mob:px-[5%] mob:items-center
    lap:h-[80px]'>
        {/* Header */}
        <div className='big:w-[1286px] big:h-[41px] flex items-center justify-between
        lap:w-[100%]'>

            {/* Logo */}
            <div className='flex big:w-[185px] justify-between items-center
            '>
                <Image src={logo} alt='LOGO' className='lap:w-[50px] lap:h-[32px]
                mob:w-[30px] mob:h-[30px]'/>
                <div className={`${montserrat.className} lap:text-[34px] font-[700]
                  mob:text-[30px]`}>Furniro</div>
            </div>

            {/* Routes */}
            <div className='lap:flex text-[16px] font-[500] big:w-[430px] justify-between items-center
            mob:hidden
            lap:w-[300px]'>
                <Link href='/' className='hover:underline hover:text-[#B88E2F]'>Home</Link>
                <Link href='/shop' className='hover:underline hover:text-[#B88E2F]'>Shop</Link>
                <Link href='/blog' className='hover:underline hover:text-[#B88E2F]'>Blog</Link>
                <Link href='/contact' className='hover:underline hover:text-[#B88E2F]'>Contact</Link>
            </div>

            {/* Icons */}
            <div className='lap:flex big:w-[247px] justify-between items-center
            mob:hidden
            lap:w-[150px]'>
                <BsPersonExclamation className='w-[28px] h-[28px] hover:text-[#B88E2F] hover:cursor-pointer'/>
                <CiSearch  className='w-[28px] h-[28px] hover:text-[#B88E2F] hover:cursor-pointer'/>
                <IoIosHeartEmpty  className='w-[28px] h-[28px] hover:text-[#B88E2F] hover:cursor-pointer'/>
                <Link href='/cart'><AiOutlineShoppingCart  className='w-[28px] h-[28px] hover:text-[#B88E2F] hover:cursor-pointer'/></Link>
            </div>
        </div>

        <input type="text" placeholder='Search' className='mob:hidden lap:hidden
        tab:flex h-[80%] px-[2%] border-[2px] border-black'/>

          <Sheet>
          <SheetTrigger>
              <IoMdMenu className='w-[30px] h-[30px]
              lap:hidden'/>
          </SheetTrigger>

          <SheetContent className='flex flex-col gap-[16px] w-[65%]
          tab:w-[40%]'>
            <input type="text" placeholder='Search' className='border-[2px] border-black px-[5%] w-[80%]
            tab:hidden'/>
            <Link href='/'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
            <hr className='border border-black'/>
            <Link href='#'>My Account</Link>
            <Link href='#'>Liked</Link>
            <Link href='/cart'>Cart</Link>
          </SheetContent>
          </Sheet>


    </div>
  )
}   

export default Header