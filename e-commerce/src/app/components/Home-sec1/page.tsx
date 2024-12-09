import React from 'react'
import Image from 'next/image'
import dining from '../../public/dining.png'
import living from '../../public/living.png'
import bedroom from '../../public/bedroom.png'

const Homesec1 = () => {
  return (
    <div className='w-[1183px] h-[685px] mt-[57px] mx-[128px] flex flex-col gap-[62px]'>

        <div className='flex flex-col items-center'>
            <div className='text-[32px] font-[700]'>Browse The Range</div>
            <div className='text-[20px] font-[400] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        <div className='flex gap-[20px]'>

            <div className='flex flex-col gap-[30px] items-center hover:border-[3px] hover:border-black'>
                <Image src={dining} alt='img' width={381} height={480}/>
                <div className='text-[24px] font-[600]'>Dining</div>
            </div>

            <div className='flex flex-col gap-[30px] items-center hover:border-[3px] hover:border-black'>
                <Image src={living} alt='img' width={381} height={480}/>
                <div className='text-[24px] font-[600]'>Living</div>
            </div>

            <div className='flex flex-col gap-[30px] items-center hover:border-[3px] hover:border-black'>
                <Image src={bedroom} alt='img' width={381} height={480}/>
                <div className='text-[24px] font-[600]'>Bedroom</div>
            </div>

        </div>

    </div>
  )
}

export default Homesec1