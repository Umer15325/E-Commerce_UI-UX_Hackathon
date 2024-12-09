import React from 'react'
import sofabig from '../../public/sofabig.png'
import Image from 'next/image'
import { AiFillDelete } from 'react-icons/ai'

const Cartsec1 = () => {
  return (
    <div className='h-[525px] flex justify-center items-center'>

        <div className='h-[390px] w-[1240px] flex gap-[30px]'>
            {/* left */}
            <div className='flex flex-col gap-[55px]'>
                {/* bar */}
                <div className='w-[817px] h-[55px] bg-[#F9F1E7] text-[16px] font-[500] flex px-[142px] items-center'>
                     <div>Product</div>
                     <div className='ml-[114px]'>Price</div>
                     <div className='ml-[137px]'>Quantity</div>
                     <div className='ml-[46px] '>Subtotal</div>
                </div>
     
                {/* below */}

                <div className='flex items-center'>
                    <div className='w-[108px] h-[105px] border rounded-[5px] bg-[#F9F1E7] flex items-center'>
                        <Image src={sofabig} alt='img'/>
                    </div>
                    <div className='text-[16px] font-[400] text-[#9F9F9F] ml-[37px]'>Asgaard sofa</div>
                    <div className='text-[16px] font-[400] text-[#9F9F9F] ml-[69px]'>Rs. 250,000.00</div>
                    <div className='w-[32px] h-[32px] border border-black rounded-[5px] flex justify-center     items-center ml-[84px] mr-[60px]'>1</div>
                    <div className='text-[16px] font-[400] mr-[49px]'>Rs. 250,000.00</div>
                    <AiFillDelete className='w-[28px] h-[28px] text-[#B88E2F] hover:text-black'/>
                </div>
            </div>


            {/* right */}
            <div className='w-[393px] h-[390px] bg-[#F9F1E7] flex flex-col items-center py-[15px] gap-[61px]'>

                <div className='text-[32px] font-[600]'>Cart Totals</div>

                <div className='flex flex-col justify-between gap-[39px]'>
                    <div className='flex justify-between items-center'>
                        <div className='text-[16px] font-[500]'>Subtotal</div>
                        <div className='text-[16px] font-[400] text-[#9F9F9F]'>Rs. 250,000.00</div>
                    </div> 
                    <div className='flex justify-between items-center'>
                        <div className='text-[16px] font-[500]'>Total</div>
                        <div className='text-[20px] font-[500] text-[#B88E2F]'>Rs. 250,000.00</div>
                    </div>
                    <button className='w-[222px] h-[59px] border border-black rounded-[15px] text-[20px] font-[400] hover:bg-[#B88E2F]'>Check Out</button>
                </div>

            </div>
           

        </div>
        
    </div>
  )
}

export default Cartsec1