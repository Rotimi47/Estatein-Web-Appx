import React from 'react'
import ExploreBtn from './UI/ExploreBtn'
import abstractOne from '../assets/abstractOne.png'




const Explore = () => {
  return (
    <div style={{ backgroundImage: `url(${abstractOne})` }}  className="mt-10 px-4 py-12.5  lg:mx-0 lg:py-15 lg:px-20 bg-cover bg-center bg-no-repeat 2xl:max-w-380 2xl:mx-auto">
        <div className='flex flex-col gap-7.5 lg:flex-row lg:gap-37.5'>
            <div className='flex flex-col gap-1.5'>
                <h1 className='font-semibold text-[28px]'>Start Your Real Estate Journey Today</h1>
                <p className='text-sm font-medium text-neutral-400'>Your dream property is just a click away . Whether you are looking for a new home, a strategic investment, or expert real estate advice. Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalised assistance </p>
            </div>
            <div className='content-center'>
                <ExploreBtn/>
            </div>
        </div>
    </div>
  )
}

export default Explore