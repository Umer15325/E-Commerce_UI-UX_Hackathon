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
        <div className='flex lap:gap-[38px] justify-center
        mob:gap-[5%]'>
            <button className='bg-[#F9F1E7] flex justify-center items-center lap:w-[60px] lap:h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white
            mob:w-[40px] mob:h-[40px]'>1</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center lap:w-[60px] lap:h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white
            mob:w-[40px] mob:h-[40px]'>2</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center lap:w-[60px] lap:h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white
            mob:w-[40px] mob:h-[40px]'>3</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center lap:w-[98px] lap:h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white
            mob:w-[78px] mob:h-[40px]'>Next</button>
        </div>

        {/* pink bar */}
        <div className='lap:h-[270px] bg-[#FAF3EA] flex lap:flex-row lap:px-[53px] lap:justify-between lap:items-center lap:mt-[85px]
        mob:mt-[65px] mob:flex-col mob:gap-[20px] mob:py-[5%] mob:px-[5%]
        tab:px-[30%]'>

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