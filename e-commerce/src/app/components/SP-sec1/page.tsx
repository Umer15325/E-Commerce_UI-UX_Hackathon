import React from 'react'
import sofa1 from '../../public/sofa1.png'
import sofa2 from '../../public/sofa2.png'
import sofa3 from '../../public/sofa3.png'
import sofa4 from '../../public/sofa4.png'
import sofabig from '../../public/sofabig.png'
import rating from '../../public/rating.png'
import Image from 'next/image'
import { PiLineVerticalLight } from 'react-icons/pi'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const SPsec1 = () => {
  return (
    <div className='h-[820px] px-[99px] pt-[35px] pb-[35px] flex justify-between'>

        {/* left */}
        <div className='flex gap-[31px] h-[500px] w-[553px]'>
            <div className='flex flex-col gap-[32px]'>
            <div className='w-[76px] h-[80px] bg-[#F9F1E7] border rounded-[10px] flex items-center hover:border-black hover:border-[2px]'><Image src={sofa1} alt='product' width={76} height={80}/></div>
            <div className='w-[76px] h-[80px] bg-[#F9F1E7] border rounded-[10px] flex items-center hover:border-black hover:border-[2px]'><Image src={sofa2} alt='product' width={76} height={80}/></div>
            <div className='w-[76px] h-[80px] bg-[#F9F1E7] border rounded-[10px] flex items-center hover:border-black hover:border-[2px]'><Image src={sofa3} alt='product' width={76} height={80}/></div>
            <div className='w-[76px] h-[80px] bg-[#F9F1E7] border rounded-[10px] flex items-center hover:border-black hover:border-[2px]'><Image src={sofa4} alt='product' width={76} height={80}/></div>
            </div>

            <div className='w-[423px] h-[500px] bg-[#F9F1E7] flex items-center border rounded-[10px]'><Image src={sofabig} alt='product' width={481} height={391}/></div>
        </div>

        {/* right */}
        <div className='h-[730px] w-[606px] flex flex-col gap-[60px]'>

<div className='flex flex-col gap-[28px]'>
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

            <div className='flex flex-col gap-[12px]'>
                <div className='text-[14px] font-[400] text-[#9F9F9F]'>Size</div>
                <div className='flex gap-[16px]'>
                    <button className='w-[30px] h-[30px] flex justify-center items-center text-[13px] font-[400] hover:bg-[#B88E2F] bg-[#F9F1E7] border rounded-[5px] hover:text-[#FFFFFF]'>L</button>
                    <button className='w-[30px] h-[30px] flex justify-center items-center text-[13px] font-[400] hover:bg-[#B88E2F] bg-[#F9F1E7] border rounded-[5px] hover:text-[#FFFFFF]'>XL</button>
                    <button className='w-[30px] h-[30px] flex justify-center items-center text-[13px] font-[400] hover:bg-[#B88E2F] bg-[#F9F1E7] border rounded-[5px] hover:text-[#FFFFFF]'>XS</button>
                </div>
            </div>

            <div className='flex flex-col gap-[12px]'>
                <div className='text-[14px] font-[400] text-[#9F9F9F]'>Color</div>
                <div className='flex gap-[16px]'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center text-[13px] font-[400] bg-[#816DFA] border rounded-[50px]'></div>
                    <div className='w-[30px] h-[30px] flex justify-center items-center text-[13px] font-[400] bg-[#000000] border rounded-[50px]'></div>
                    <div className='w-[30px] h-[30px] flex justify-center items-center text-[13px] font-[400] bg-[#B88E2F] border rounded-[50px]'></div>
                </div>
            </div>

            <div className='flex gap-[18px]'>
                <button className='w-[123px] h-[64px] border border-[#9F9F9F] rounded-[10px] flex items-center justify-between px-[15px] hover:bg-[#B88E2F]'>
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                </button>

                <button className='w-[215px] h-[64px] border border-[#000000] rounded-[10px] flex items-center justify-center hover:bg-[#B88E2F]'>Add To Cart</button>

                <button className='w-[215px] h-[64px] border border-[#000000] rounded-[10px] flex items-center justify-center hover:bg-[#B88E2F]'>+ Compare</button>
            </div>
</div>

<div className='flex flex-col gap-[41px]'> 
            <hr className='w-[605px] border border-[#D9D9D9]'/>

            <div className='text-[16px] font-[400] text-[#9F9F9F] flex gap-[14px]'>
                <div className='w-[75px]'>
                    <div>SKU </div>
                    <div>Category</div>
                    <div>Tags</div>
                    <div>Share</div>
                </div>
                <div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                    <div>:</div>
                </div>
                <div className='w-[190px]'>
                    <div>SS001</div>
                    <div>Sofas</div>
                    <div>Sofa, Chair, Home, Shop</div>
                    <div className='text-[#000000] flex gap-[25px]'>
                        <FaFacebook className='w-[20px] h-[20px]'/>
                        <FaLinkedin className='w-[20px] h-[20px]'/>
                        <AiFillTwitterCircle className='w-[20px] h-[20px]'/>
                    </div>
                </div>
            </div>
</div>
        </div>

    </div>
  )
}

export default SPsec1