import React from 'react'
import Image from 'next/image'
import SPsofa from '../../public/SPsofa.png'

const SPsec2 = () => {
  return (
    <div className='flex flex-col gap-[37px] items-center h-[744px] justify-center'>

        <div className='w-[649px] flex justify-between'>
            <div className='text-[24px] font-[500]'>Description</div>
            <div className='text-[24px] font-[400] text-[#9F9F9F]'>Additional Information</div>
            <div className='text-[24px] font-[400] text-[#9F9F9F]'>Reviews [5]</div>
        </div>

        <div className='text-[16px] font-[400] text-[#9F9F9F] w-[1026px] flex flex-col gap-[30px]'>
            <div>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</div>
            <div>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>
        </div>

        <div className='flex gap-[29px]'> 
            <div className='w-[605px] h-[348px] bg-[#F9F1E7] border rounded-[10px]'>
                <Image src={SPsofa} alt='img'/>
            </div>
            <div className='w-[605px] h-[348px] bg-[#F9F1E7] border rounded-[10px]'>
            <Image src={SPsofa} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default SPsec2