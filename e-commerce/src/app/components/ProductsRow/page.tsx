import React from 'react'
import prod1 from '../../public/prod1.png'
import prod2 from '../../public/prod2.png'
import prod3 from '../../public/prod3.png'
import prod4 from '../../public/prod4.png'
import Image from 'next/image'
import Link from 'next/link'

const ProductsRow = () => {
  return (
    <div>
        <div className=' flex lap:gap-[32px] justify-center lap:mb-[40px] big:mx-0
        mob:mx-[5%] mob:gap-[5%] mob:mb-[20px]'>
            
            <div className='flex lap:flex-row lap:gap-[32px]
            mob:flex-col mob:gap-[20px]'>

                <Link href='single-product'>
                <div className='hover:border-[3px] hover:border-black'>
                    <Image src={prod1} alt='product' width={285} height={301}/>
                    <div className='lap:p-[20px_18px] bg-[#F4F5F7]
                    mob:px-[2%]'>
                        <div className='lap:text-[24px] font-[600]'>Syltherine</div>
                        <div className='lap:text-[16px] font-[500] text-[#898989]
                        mob:text-[12px]'>Stylish cafe chair</div>
                        <div className='flex justify-between items-center'>
                            <p className='big:text-[20px] font-[600]
                            mob:text-[12px]
                            '>Rp 2.500.000</p>
                            <p className='line-through big:text-[16px] font-[400] text-[#B0B0B0]
                            mob:text-[12px]
                            '>Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                </Link>
    
                <Link href='single-product'>
                <div className='hover:border-[3px] hover:border-black'>
                    <Image src={prod2} alt='product' width={285} height={301}/>
                    <div className='lap:p-[20px_18px] bg-[#F4F5F7]
                    mob:px-[2%]'>
                        <div className='lap:text-[24px] font-[600]'>Leviosa</div>
                        <div className='lap:text-[16px] font-[500] text-[#898989]
                        mob:text-[12px]'>Stylish cafe chair</div>
                        <div>
                            <p className='big:text-[20px] font-[600]
                            mob:text-[12px]
                            '>Rp 2.500.000</p>
                        </div>
                    </div>
                </div>
                </Link>

            </div>


            <div className='flex lap:flex-row lap:gap-[32px]
            mob:flex-col mob:gap-[20px]'>

                <Link href='single-product'>
                <div className='hover:border-[3px] hover:border-black'>
                    <Image src={prod3} alt='product' width={285} height={301}/>
                    <div className='lap:p-[20px_18px] bg-[#F4F5F7]
                    mob:px-[2%]'>
                        <div className='lap:text-[24px] font-[600]'>Lolito</div>
                        <div className='lap:text-[16px] font-[500] text-[#898989]
                        mob:text-[12px]'>Luxury lap sofa</div>
                        <div className='flex justify-between items-center'>
                            <p className='big:text-[20px] font-[600]
                            mob:text-[12px]
                            '>Rp 7.000.000</p>
                            <p className='line-through big:text-[16px] font-[400] text-[#B0B0B0]
                            mob:text-[12px]
                            '>Rp 14.000.000</p>
                        </div>
                    </div>
                </div>
                </Link>
    
                <Link href='single-product'>
                <div className='hover:border-[3px] hover:border-black'>
                    <Image src={prod4} alt='product' width={285} height={301}/>
                    <div className='lap:p-[20px_18px] bg-[#F4F5F7]
                    mob:px-[2%]'>
                        <div className='lap:text-[24px] font-[600]'>Respira</div>
                        <div className='lap:text-[16px] font-[500] text-[#898989]
                        mob:text-[12px]'>Outdoor bar table</div>
                        <div>
                            <p className='big:text-[20px] font-[600]
                            mob:text-[12px]
                            '>Rp 500.000</p>
                        </div>
                    </div>
                </div>
                </Link>

            </div>
    
            </div>
    </div>
  )
}

export default ProductsRow