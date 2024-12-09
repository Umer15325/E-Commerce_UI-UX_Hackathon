import React from 'react'
import Image from 'next/image'
import blog1 from '../../public/blog1.png'
import blog2 from '../../public/blog2.png'
import blog3 from '../../public/blog3.png'
import recent from '../../public/recent.png'
import { FaTag, FaUser } from 'react-icons/fa'
import { PiBagSimpleFill } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'

const BlogSection = () => {
  return (
     <div>

    <div className='px-[98px] pt-[106px] flex gap-[30px]'>

            {/* left */}
        <div className='w-[817px]'>


            <div className='mb-[54px]'>
                <Image src={blog1} alt='img' width={817} height={500} className='mb-[17px]'/>

                <div className='text-[16px] font-[400] text-[#9F9F9F] flex gap-[35px] mb-[15px]'>
                    <div className='flex gap-[7px] items-center'>
                        <FaUser className='w-[20px] h-[20px]'/>
                        <p>Admin</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <PiBagSimpleFill className='w-[24px] h-[24px]'/>
                        <p>14 Oct 2022</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <FaTag className='w-[20px] h-[20px]'/>
                        <p>Wood</p>
                    </div>
                </div>

                <div className='text-[30px] font-[500] mb-[12px]'>Going all-in with millennial design</div>

                <div className='text-[15px] font-[400] text-[#9F9F9F] text-justify mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</div>

                <button className='w-[89px] h-[36px] text-[16px] font-[400] underline hover:text-[#B88E2F]'>Read more</button>
            </div>


            <div className='mb-[54px]'>
                <Image src={blog2} alt='img' width={817} height={500} className='mb-[17px]'/>

                <div className='text-[16px] font-[400] text-[#9F9F9F] flex gap-[35px] mb-[15px]'>
                    <div className='flex gap-[7px] items-center'>
                        <FaUser className='w-[20px] h-[20px]'/>
                        <p>Admin</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <PiBagSimpleFill className='w-[24px] h-[24px]'/>
                        <p>14 Oct 2022</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <FaTag className='w-[20px] h-[20px]'/>
                        <p>Handmade</p>
                    </div>
                </div>

                <div className='text-[30px] font-[500] mb-[12px]'>Exploring new ways of decorating</div>

                <div className='text-[15px] font-[400] text-[#9F9F9F] text-justify mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</div>

                <button className='w-[89px] h-[36px] text-[16px] font-[400] underline hover:text-[#B88E2F]'>Read more</button>
            </div>


            <div className='mb-[54px]'>
                <Image src={blog3} alt='img' width={817} height={500} className='mb-[17px]'/>

                <div className='text-[16px] font-[400] text-[#9F9F9F] flex gap-[35px] mb-[15px]'>
                    <div className='flex gap-[7px] items-center'>
                        <FaUser className='w-[20px] h-[20px]'/>
                        <p>Admin</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <PiBagSimpleFill className='w-[24px] h-[24px]'/>
                        <p>14 Oct 2022</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <FaTag className='w-[20px] h-[20px]'/>
                        <p>Wood</p>
                    </div>
                </div>

                <div className='text-[30px] font-[500] mb-[12px]'>Handmade pieces that took time to make</div>

                <div className='text-[15px] font-[400] text-[#9F9F9F] text-justify mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</div>

                <button className='w-[89px] h-[36px] text-[16px] font-[400] underline hover:text-[#B88E2F]'>Read more</button>
            </div>

        </div>


        {/* right */}
        <div className='flex flex-col gap-[41px]'>

            <div className='w-[393px] h-[537px] flex flex-col items-center gap-[43px]'>
                <div className='w-[311px] h-[58px] border border-[#9F9F9F] rounded-[10px] px-[10px] flex justify-between items-center'>
                    <input type="text"  />
                    <CiSearch className='w-[24px] h-[24px] '/>
                </div>

                <div className='w-[251px] h-[353px] text-[15px] font-[400] text-[#9F9F9F] flex flex-col gap-[41px]'>
                    <div className='text-[24px] font-[500] text-black'>
                        Categories
                    </div>
                    <div className='flex justify-between hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <p>Crafts</p>
                        <p>2</p>
                    </div>
                    <div className='flex justify-between hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <p>Design</p>
                        <p>8</p>
                    </div>
                    <div className='flex justify-between hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <p>Handmade</p>
                        <p>7</p>
                    </div>
                    <div className='flex justify-between hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <p>Interior</p>
                        <p>1</p>
                    </div>
                    <div className='flex justify-between hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <p>Wood</p>
                        <p>6</p>
                    </div>
                </div>
            </div>




            <div className='w-[393px] h-[650px] flex flex-col gap-[26px] py-[16px] pl-[76px]'>

                <div className='text-[24px] font-[500] text-black'>Recent Posts</div>

                <div className='flex flex-col gap-[39px]'>
                    <div className='flex gap-[12px] items-center hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <Image src={recent} alt='img' width={80} height={80}/>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='text-[14px] font-[400]'>Going all-in with <br /> millennial design</p>
                            <p className='text-[12px] font-[400] text-[#9F9F9F]'>03 Aug 2022</p>
                        </div>
                    </div>

                    <div className='flex gap-[12px] items-center hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <Image src={recent} alt='img' width={80} height={80}/>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='text-[14px] font-[400]'>Going all-in with <br /> millennial design</p>
                            <p className='text-[12px] font-[400] text-[#9F9F9F]'>03 Aug 2022</p>
                        </div>
                    </div>

                    <div className='flex gap-[12px] items-center hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <Image src={recent} alt='img' width={80} height={80}/>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='text-[14px] font-[400]'>Going all-in with <br /> millennial design</p>
                            <p className='text-[12px] font-[400] text-[#9F9F9F]'>03 Aug 2022</p>
                        </div>
                    </div>

                    <div className='flex gap-[12px] items-center hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <Image src={recent} alt='img' width={80} height={80}/>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='text-[14px] font-[400]'>Going all-in with <br /> millennial design</p>
                            <p className='text-[12px] font-[400] text-[#9F9F9F]'>03 Aug 2022</p>
                        </div>
                    </div>

                    <div className='flex gap-[12px] items-center hover:border-black hover:border-[2px] hover:cursor-pointer'>
                        <Image src={recent} alt='img' width={80} height={80}/>
                        <div className='flex flex-col gap-[5px]'>
                            <p className='text-[14px] font-[400]'>Going all-in with <br /> millennial design</p>
                            <p className='text-[12px] font-[400] text-[#9F9F9F]'>03 Aug 2022</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        
    </div>



            {/* page number */}
            <div className='flex gap-[38px] justify-center'>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[60px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>1</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[60px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>2</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[60px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>3</button>
            <button className='bg-[#F9F1E7] flex justify-center items-center w-[98px] h-[60px] border rounded-[10px] border-[#F9F1E7] text-[20px] font-[400] hover:bg-[#B88E2F] hover:text-white'>Next</button>
            </div>

    </div>
  )
}

export default BlogSection