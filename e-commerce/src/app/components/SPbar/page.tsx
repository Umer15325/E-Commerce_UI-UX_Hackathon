import React from 'react'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { PiLineVerticalLight } from 'react-icons/pi'

const SPbar = () => {
  return (
    <div className='h-[100px] bg-[#F9F1E7] mt-[14px] flex gap-[24px] items-center px-[99px] text-[16px] font-[400]'>

        <div className='flex gap-[14px] items-center'>
            <div className='text-[#9F9F9F]'>Home</div>
            <MdOutlineNavigateNext className='w-[20px] h-[20px]'/>
        </div>

        <div className='flex gap-[21px] items-center'>
            <div className='text-[#9F9F9F]'>Shop</div>
            <MdOutlineNavigateNext className='w-[20px] h-[20px]'/>
        </div>

        <div className='flex gap-[34px] items-center'>
            <PiLineVerticalLight className='w-[37px] h-[37px]'/>
            <div>Asgaard sofa</div>
        </div>

    </div>
  )
}

export default SPbar