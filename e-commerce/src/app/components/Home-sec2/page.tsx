import React from 'react'
import prod1 from '../../public/prod1.png'
import prod2 from '../../public/prod2.png'
import prod3 from '../../public/prod3.png'
import prod4 from '../../public/prod4.png'
import prod5 from '../../public/prod5.png'
import prod6 from '../../public/prod6.png'
import prod7 from '../../public/prod7.png'
import prod8 from '../../public/prod8.png'
import Image from 'next/image'

const Homesec2 = () => {
  return (
    <div className='w-[1236px] h-[1084px] mt-[56px] mx-[102px] flex flex-col gap-[32px] items-center'>
                {/* heading */}
        <div className='text-[40px] font-[700]'>Our Products</div>

                {/* firts row */}
        <div className=' flex gap-[32px]'>
                
            <div className='hover:bg-[#3A3A3A]'>
                <Image src={prod1} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Syltherine</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Stylish cafe chair</div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[20px] font-[600]'>Rp 2.500.000</p>
                        <p className='line-through text-[16px] font-[400] text-[#B0B0B0]'>Rp 3.500.000</p>
                    </div>
                </div>
            </div>

            <div>
                <Image src={prod2} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Leviosa</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Stylish cafe chair</div>
                    <div>
                        <p className='text-[20px] font-[600]'>Rp 2.500.000</p>
                    </div>
                </div>
            </div>

            <div>
                <Image src={prod3} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Lolito</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Luxury big sofa</div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[20px] font-[600]'>Rp 7.000.000</p>
                        <p className='line-through text-[16px] font-[400] text-[#B0B0B0]'>Rp 14.000.000</p>
                    </div>
                </div>
            </div>

            <div>
                <Image src={prod4} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Respira</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Outdoor bar table and stool</div>
                    <div>
                        <p className='text-[20px] font-[600]'>Rp 500.000</p>
                    </div>
                </div>
            </div>


        </div>


            {/* second row */}
        <div className=' flex gap-[32px]'>
            <div>
                <Image src={prod5} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Grifo</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Night lamp</div>
                    <div>
                        <p className='text-[20px] font-[600]'>Rp 1.500.000</p>
                    </div>
                </div>
            </div>

            <div>
                <Image src={prod6} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Muggo</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Small mug</div>
                    <div>
                        <p className='text-[20px] font-[600]'>Rp 150.000</p>
                    </div>
                </div>
            </div>

            <div>
                <Image src={prod7} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Pingky</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Cute bed set</div>
                    <div className='flex justify-between items-center'>
                        <p className='text-[20px] font-[600]'>Rp 7.000.000</p>
                        <p className='line-through text-[16px] font-[400] text-[#B0B0B0]'>Rp 14.000.000</p>
                    </div>
                </div>
            </div>

            <div>
                <Image src={prod8} alt='product' width={285} height={301}/>
                <div className='p-[20px_18px] bg-[#F4F5F7]'>
                    <div className='text-[24px] font-[600]'>Potty</div>
                    <div className='text-[16px] font-[500] text-[#898989]'>Minimalist flower pot</div>
                    <div>
                        <p className='text-[20px] font-[600]'>Rp 500.000</p>
                    </div>
                </div>
            </div>

        </div>

                {/* button */}
        <button className='text-[16px] font-[600] w-[245px] h-[48px] p-[12px_74px] border-[1px] border-[#B88E2F] text-[#B88E2F]'>Show More</button>

    </div>
  )
}

export default Homesec2