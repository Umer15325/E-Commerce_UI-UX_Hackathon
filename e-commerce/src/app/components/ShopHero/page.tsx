import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { PiCirclesFourFill, PiLineVerticalLight } from 'react-icons/pi';
import { BsSliders, BsViewList } from 'react-icons/bs';

const ShopHero = () => {
  return (
    <div>
        <div className='hero2 flex flex-col justify-center items-center
        mob:py-[15%]
        tab:py-0'>

            <div className='text-[48px] font-[500]'>Shop</div>

            <div className='flex gap-[6px] items-center'>
                <div className='text-[16px] font-[500]'>Home</div>
                <MdOutlineNavigateNext className='w-[20px] h-[20px]'/>
                <div className='text-[16px] font-[300]'>Shop</div>
            </div>

        </div>


                    {/* BELOW BAR */}

        <div className='tab:h-[100px] bg-[#F9F1E7] flex justify-between
        lap:px-[99px] lap:mb-[63px] tab:py-0 tab:flex-row
        mob:flex-col mob:px-[5%] mob:h-auto mob:py-[5%] mob:mb-6 mob:gap-6'>

            {/* left */}
            <div className='flex lap:gap-[28px] items-center justify-center
            mob:gap-[5%]'>

                <div className='flex gap-[12px] hover:text-[#B88E2F] hover:cursor-pointer items-center'>
                    <BsSliders className='lap:w-[24px] lap:h-[24px] rotate-180'/>
                    <div className='text-[20px] font-[400]'>Filter</div>
                </div>

                <PiCirclesFourFill className='lap:w-[28px] lap:h-[28px] hover:text-[#B88E2F] hover:cursor-pointer'/>

                <BsViewList className='lap:w-[24px] lap:h-[24px] hover:text-[#B88E2F] hover:cursor-pointer'/>

                <PiLineVerticalLight className='w-[37px] h-[37px]'/>

                <div className='text-[16px] font-[400]'>Showing 1–16 <br className='tab:hidden'/> of 32 results</div>

            </div>

            {/* right */}
            <div className='flex items-center gap-[29px] justify-center'>

            <div className='flex gap-[17px] items-center'>
                <div className='lap:text-[20px] font-[400]'>Show</div>
                <div className='lap:w-[55px] lap:h-[55px] bg-white text-[#9F9F9F] flex justify-center items-center
                mob:w-8 mob:h-8'>16</div>
            </div>

            <div className='flex gap-[17px] items-center'>
                <div className='lap:text-[20px] font-[400]'>Short by</div>
                <div className='lap:w-[188px] lap:h-[55px] bg-white text-[#9F9F9F] flex items-center px-[30px]
                mob:h-8'>Default</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShopHero