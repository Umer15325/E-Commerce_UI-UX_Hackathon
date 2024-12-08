import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from 'next/image';
import filter from '../../public/filter.png'
import { PiCirclesFourFill, PiLineVerticalLight } from 'react-icons/pi';
import { BsViewList } from 'react-icons/bs';

const ShopHero = () => {
  return (
    <div>
        <div className='Shophero flex flex-col justify-center items-center'>

            <div className='text-[48px] font-[500]'>Shop</div>

            <div className='flex gap-[6px] items-center'>
                <div className='text-[16px] font-[500]'>Home</div>
                <MdOutlineNavigateNext className='w-[20px] h-[20px]'/>
                <div className='text-[16px] font-[300]'>Shop</div>
            </div>

        </div>


                    {/* BELOW BAR */}

        <div className='h-[100px] bg-[#F9F1E7] flex justify-between px-[99px] mb-[63px]'>
            {/* left */}
            <div className='flex gap-[28px] items-center'>
                <div className='flex gap-[12px]'>
                    <Image src={filter} alt='filter' className='w-[25px] h-[25px]'/>
                    <div className='text-[20px] font-[400]'>Filter</div>
                </div>
                <PiCirclesFourFill className='w-[28px] h-[28px]'/>
                <BsViewList className='w-[24px] h-[24px]'/>
                <PiLineVerticalLight className='w-[37px] h-[37px]'/>
                <div className='text-[16px] font-[400]'>Showing 1–16 of 32 results</div>
            </div>

            {/* right */}
            <div className='flex items-center gap-[29px]'>

            <div className='flex gap-[17px] items-center'>
                <div className='text-[20px] font-[400]'>Show</div>
                <div className='w-[55px] h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center'>16</div>
            </div>

            <div className='flex gap-[17px] items-center'>
                <div className='text-[20px] font-[400]'>Short by</div>
                <div className='w-[188px] h-[55px] bg-white text-[#9F9F9F] flex items-center px-[30px]'>Default</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShopHero