import React from 'react'
import sofabig from '../../public/sofabig.png'
import Image from 'next/image'
import { AiFillDelete } from 'react-icons/ai'

const Cartsec1 = () => {
  return (
    <div className='lap:h-[525px] flex justify-center items-center '>

        <div className='lap:h-[390px] w-screen big:w-[1240px] flex lap:flex-row gap-[30px] lap:px-[40px] big:px-0
        mob:flex-col'>

            {/* left */}
            <div className='flex lap:flex-col gap-[55px] lap:mt-0
            mob:flex-row mob:mt-[30px]'>
                {/* bar */}
                <div className='lap:w-[817px] lap:h-[55px] bg-[#F9F1E7] text-[16px] font-[500] flex lap:px-[142px] items-center lap:gap-0 lap:py-0 lap:mx-0 lap:flex-row
                mob:flex-col mob:gap-[20px] mob:p-[5%] mob:mx-[5%]'>
                     <div>Product</div>
                     <div className='lap:ml-[114px]'>Price</div>
                     <div className='lap:ml-[137px]'>Quantity</div>
                     <div className='lap:ml-[46px] '>Subtotal</div>
                </div>
     
                {/* below */}

                <div className='flex items-center lap:flex-row lap:gap-0 lap:p-0
                mob:flex-col mob:gap-[20px] mob:p-[5%]'>
                    <div className='lap:w-[108px] h-[105px] border rounded-[5px] bg-[#F9F1E7] lap:flex items-center hidden'>
                        <Image src={sofabig} alt='img'/>
                    </div>
                    <div className='text-[16px] font-[400] text-[#9F9F9F] lap:ml-[37px]'>Asgaard sofa</div>
                    <div className='text-[16px] font-[400] text-[#9F9F9F] lap:ml-[69px]'>Rs. 250,000.00</div>
                    <div className='lap:w-[32px] lap:h-[32px] lap:border border-black rounded-[5px] flex justify-center items-center lap:ml-[84px] lap:mr-[60px]'>1</div>
                    <div className='text-[16px] font-[400] lap:mr-[49px]'>Rs. 250,000.00</div>
                    <AiFillDelete className='w-[28px] h-[28px] text-[#B88E2F] hover:text-black'/>
                </div>
            </div>


            {/* right */}
            <div className='lap:w-[393px] lap:h-[390px] bg-[#F9F1E7] flex flex-col items-center py-[15px] gap-[61px]
            '>

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