import React from 'react'
import Image from 'next/image'
import dining from '../../public/dining.png'
import living from '../../public/living.png'
import bedroom from '../../public/bedroom.png'

const Homesec1 = () => {
  return (
    <div className='big:w-[1183px] big:h-[685px] big:mt-[57px] big:mx-[128px] flex flex-col big:gap-[62px]
    mob:mt-[10%] mob:gap-[30px]'>

            {/* Heading */}
        <div className='flex flex-col items-center'>
            <div className='lap:text-[32px] font-[700]
            mob:text-[24px]'>Browse The Range</div>
            <div className='lap:text-[20px] font-[400] text-[#666666] text-center
            mob:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

            {/* Products */}
        <div className='flex big:gap-[20px] big:p-0
        mob:flex-col mob:gap-[40px] mob:px-[5%]
        lap:flex-row'>

            <div className='flex flex-col big:gap-[30px] items-center hover:border-[3px] hover:border-black
            mob:gap-[15px]'>
                <Image src={dining} alt='img' width={381} height={480}/>
                <div className='tab:text-[24px] font-[600]
                mob:text-[20px]'>Dining</div>
            </div>

            <div className='flex flex-col big:gap-[30px] items-center hover:border-[3px] hover:border-black
            mob:gap-[15px]'>
                <Image src={living} alt='img' width={381} height={480}/>
                <div className='tab:text-[24px] font-[600]
                mob:text-[20px]'>Living</div>
            </div>

            <div className='flex flex-col big:gap-[30px] items-center hover:border-[3px] hover:border-black
            mob:gap-[15px]'>
                <Image src={bedroom} alt='img' width={381} height={480}/>
                <div className='tab:text-[24px] font-[600]
                mob:text-[20px]'>Bedroom</div>
            </div>

        </div>

    </div>
  )
}

export default Homesec1