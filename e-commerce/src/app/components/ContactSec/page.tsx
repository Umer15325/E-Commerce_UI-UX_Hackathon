import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'

const ContactSec = () => {
  return (
    <div className='lap:h-[1144px] flex flex-col items-center lap:pt-[98px]
    mob:pt-[50px]'>

            {/* upper */}
        <div className='lap:w-[644px] flex flex-col items-center gap-[7px] lap:px-0
        mob:px-[5%]'>
            <div className='lap:text-[36px] font-[600]
            mob:text-[26px]'>Get In Touch With Us</div>
            <div className='text-[16px] font-[400] text-[#9F9F9F] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
        </div>

            {/* lower */}
        <div className='flex lap:flex-row lap:gap-[30px]
        mob:flex-col-reverse mob:gap-[100px]'>

            {/* left */}
            <div className='lap:w-[393px] lap:h-[537px] lap:mt-[82px] lap:pt-[52px] lap:pl-[54px] flex flex-col lap:gap-[42px]
            mob:gap-[30px] mob:px-[5%]'>

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
            <div className='lap:w-[635px] lap:h-[923px] lap:px-[52px] lap:pt-[119px] flex flex-col gap-[49px]
            
            mob:pt-[50px] mob:px-[5%] mob:w-screen'>

                <div className='flex flex-col gap-[36px]'>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Your name</div>
                        <input type="text" placeholder='Abc' className='lap:w-[529px] lap:h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] flex items-center lap:px-[31px]
                        mob:h-[40px] mob:px-[5%]'/>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Email address</div>
                        <input type="text" placeholder='Abc@def.com' className='lap:w-[529px] lap:h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] flex items-center lap:px-[31px]
                        mob:h-[40px] mob:px-[5%]'/>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Subject</div>
                        <input type="text" placeholder='This is an optional' className='lap:w-[529px] lap:h-[75px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] flex items-center lap:px-[31px]
                        mob:h-[40px] mob:px-[5%]'/>
                    </div>
                    <div className='flex flex-col gap-[22px]'>
                        <div className='text-[16px] font-[500]'>Message</div>
                        <textarea name="text" placeholder='Hi! i’d like to ask about' className='lap:w-[529px] h-[120px] border border-[#9F9F9F] rounded-[10px] text-[16px] font-[400] text-[#9F9F9F] lap:px-[31px] lap:pt-[26px]
                        mob:px-[5%] mob:py-[5%]'></textarea>
                    </div>
                </div>

                <button className='text-[16px] font-[400] text-[#FFFFFF] lap:w-[237px] tab:h-[55px] bg-[#B88E2F] flex justify-center items-center border-[#B88E2F] border-[2px] rounded-[5px] hover:bg-white hover:text-[#B88E2F]
                mob:w-[50%] mob:h-[45px]'>Submit</button>

            </div>
        </div>
         
    </div>
  )
}

export default ContactSec