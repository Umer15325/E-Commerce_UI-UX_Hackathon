import React from 'react'
import sofa1 from '../../public/sofa1.png'
import sofa2 from '../../public/sofa2.png'
import sofa3 from '../../public/sofa3.png'
import sofa4 from '../../public/sofa4.png'
import sofabig from '../../public/sofabig.png'
import rating from '../../public/rating.png'
import Image from 'next/image'
import { PiLineVerticalLight } from 'react-icons/pi'

const SPsec1 = () => {
  return (
    <div className='h-[820px] px-[99px] pt-[35px] pb-[35px] flex justify-between'>

        {/* left */}
        <div className='flex gap-[31px] h-[500px] w-[553px]'>
            <div className='flex flex-col gap-[32px]'>
            <Image src={sofa1} alt='product' width={76} height={80} className='bg-[#F9F1E7] border rounded-[10px]'/>
            <Image src={sofa2} alt='product' width={76} height={80} className='bg-[#F9F1E7] border rounded-[10px]'/>
            <Image src={sofa3} alt='product' width={76} height={80} className='bg-[#F9F1E7] border rounded-[10px]'/>
            <Image src={sofa4} alt='product' width={76} height={80} className='bg-[#F9F1E7] border rounded-[10px]'/>
            </div>

            <Image src={sofabig} alt='product' width={324} height={500} className='bg-[#F9F1E7] border rounded-[10px]'/>
        </div>

        {/* right */}
        <div className='h-[730px] w-[606px]'>

            <div>

                <div className='text-[42px] font-[400]'>Asgaard sofa</div>
                <div className='text-[24px] font-[400] text-[#9F9F9F]'>Rs. 250,000.00</div>
                <div className='flex items-center'>
                    <Image src={rating} alt='rating' className='w-[124px] h-[20px]'/>
                    <PiLineVerticalLight className='w-[37px] h-[37px] text-[#9F9F9F]'/>
                    <div className='text-[13px] font-[400] text-[#9F9F9F]'>5 Customer Review</div>
                </div>
                <div className='text-[13px] font-[400] w-[424px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</div>
            </div>

            <div></div>
            <div></div>
            <div></div>

            <hr />

            <div></div>

        </div>

    </div>
  )
}

export default SPsec1