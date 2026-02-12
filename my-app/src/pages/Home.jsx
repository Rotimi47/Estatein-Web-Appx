import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FaqSection'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <div className=''>
      <FeaturesSection/>
    </div>
    <div>
      <Testimonials/>
    </div>
    <div>
      <FaqSection/>
 

    </div>
   


    </>
  )
}

export default Home