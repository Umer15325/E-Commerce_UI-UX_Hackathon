import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'

const ContactSec = () => {
  return (
    <div className='h-[1144px] flex flex-col items-center pt-[98px]'>

            {/* upper */}
        <div className='w-[644px] flex flex-col items-center gap-[7px]'>
            <div className='text-[36px] font-[600]'>Get In Touch With Us</div>
            <div className='text-[16px] font-[400] text-[#9F9F9F] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
        </div>

            {/* lower */}
        <div className='flex gap-[30px]'>

            {/* left */}
            <div className='w-[393px] h-[537px] mt-[82px] pt-[52px] pl-[54px] flex flex-col gap-[42px]'>

                <div className='flex gap-[30px]'>
                    <TiLocation className='w-[30px] h-[30px]'/>


                    <div>
                        <div className='text-[24px] font-[500]'>Address</div>
                        <div className='w-[212px] text-[16px] font-[400]'>236 5th SE Avenue, New York NY10000, United States</div>
                    </div>
                </div>

                <div className='flex gap-[30px]'>
                    <FaPhone className='w-[24px] h-[24px] rotate-90'/>

                    <div>
                        <div className='text-[24px] font-[500]'>Phone</div>
                        <div className='w-[212px] text-[16px] font-[400]'>Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789</div>
                    </div>
                </div>

                <div className='flex gap-[30px]'>
                    <MdOutlineAccessTimeFilled className='w-[30px] h-[30px]'/>

                    <div>
                        <div className='text-[24px] font-[500]'>Working Time</div>
                        <div className='w-[212px] text-[16px] font-[400]'>Monday-Friday: 9:00 - <br /> 22:00 <br />
                        Saturday-Sunday: 9:00 - 21:00</div>
                    </div>
                </div>
            </div>


                {/* right */}
            <div className='w-[635px] h-[923px] px-[52px] pt-[119px] flex flex-col gap-[49px]'>

                <div className='flex flex-col gap-[36px]'>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Your name</div>
                        <input type="text" placeholder='Abc' className='w-[529px] h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] flex items-center px-[31px]'/>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Email address</div>
                        <input type="text" placeholder='Abc@def.com' className='w-[529px] h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] flex items-center px-[31px]'/>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Subject</div>
                        <input type="text" placeholder='This is an optional' className='w-[529px] h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] flex items-center px-[31px]'/>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Message</div>
                        <textarea name="text" placeholder='Hi! i’d like to ask about' className='w-[529px] h-[120px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F]
                        px-[31px] pt-[26px]'></textarea>
                    </div>
                </div>

                <button className='text-[16px] font-[400] text-[#FFFFFF] w-[237px] h-[55px] bg-[#B88E2F] flex justify-center items-center border-[#B88E2F] border-[2px] rounded-[5px] hover:bg-white hover:text-[#B88E2F]'>Submit</button>

            </div>
        </div>
         
    </div>
  )
}

export default ContactSec