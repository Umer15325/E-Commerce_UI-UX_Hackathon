import React from 'react'
import prod1 from '../../public/prod1.png'
import prod2 from '../../public/prod2.png'
import prod3 from '../../public/prod3.png'
import prod4 from '../../public/prod4.png'
import Image from 'next/image'

const ProductsRow = () => {
  return (
    <div>
        <div className=' flex gap-[32px] justify-center mb-[40px]'>
                
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
    </div>
  )
}

export default ProductsRow