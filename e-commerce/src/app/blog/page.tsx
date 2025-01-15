import React from 'react'
import BlogHero from '../components/BlogHero/page'
import BlogSection from '../components/BlogSection/page'
import PinkBar from '../components/PinkBar/page'

const blog = () => {
  return (
    <div>
        <BlogHero/>
        <BlogSection/>
        <div className='h-[58px] hidden lap:block'></div>
        <PinkBar/>
        <div className='h-[22px]'></div>
    </div>
  )
}

export default blog