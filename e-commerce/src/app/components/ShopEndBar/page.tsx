import React from 'react'
import trophy from '../../public/trophy.png'
import check from '../../public/check.png'
import shipping from '../../public/shipping.png'
import support from '../../public/support.png'
import Image from 'next/image'

const ShopEndBar = () => {
  return (
    <div className='pt-[30px]'>

        {/* page number */}
        <div className='flex gap-[38px] justify-center'>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[60px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>1</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[60px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>2</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[60px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>3</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[98px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>Next</button>
        </div>

        {/* pink bar */}
        <div className='h-[270px] bg-[#FAF3EA] flex px-[53px] justify-between items-center mt-[85px]'>

            <div className='flex gap-[10px] items-center'>
                <Image src={trophy} alt='img' className='w-[60px] h-[60px]'/>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-[25px] font-[600]'>High Quality</div>
                    <div className='text-[20px] font-[500]'>crafted from top materials</div>
                </div>
            </div>

            <div className='flex gap-[10px] items-center'>
                <Image src={check} alt='img' className='w-[60px] h-[60px]'/>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-[25px] font-[600]'>Warranty Protection</div>
                    <div className='text-[20px] font-[500]'>Over 2 years</div>
                </div>
            </div>

            <div className='flex gap-[10px] items-center'>
                <Image src={shipping} alt='img' className='w-[60px] h-[60px]'/>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-[25px] font-[600]'>Free Shipping</div>
                    <div className='text-[20px] font-[500]'>Order over 150 $</div>
                </div>
            </div>

            <div className='flex gap-[10px] items-center'>
                <Image src={support} alt='img' className='w-[60px] h-[60px]'/>
                <div className='flex flex-col gap-[2px]'>
                    <div className='text-[25px] font-[600]'>24 / 7 Support</div>
                    <div className='text-[20px] font-[500]'>Dedicated support</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShopEndBar