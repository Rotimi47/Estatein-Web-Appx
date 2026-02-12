import React from 'react'
import aboutImage from '../assets/aboutImage.png'


const AboutHero = () => {
  return (
    <div className='w-full mx-auto mt-12 px-4 flex flex-col gap-10 lg:flex-row-reverse lg:gap-15 lg:px-0 lg:max-w-7xl'>
        <div>
            <img className='lg:w-full'  src={aboutImage} alt="image" />
        </div>
        <div className=''>
            <div className='flex flex-col gap-10 lg:w-153 lg:mt-17'>
                <div className='flex flex-col gap-2'>
                    <h1 className='lg:w-80 text-[28px] leading-[1.2] font-semibold tracking-normal lg:text-[46]'>Our Journey</h1>
                    <p className='text-sm lg:text-base leading-normal tracking-normal font-medium text-[#999999]'>Our story is one of continous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years we've expanded our reach , forged valuable partnerships and gained the trust of countless clients. </p>
                </div>
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                        <div className="bg-[#1A1A1A] h-23 p-4 text-center rounded-md border border-neutral-700">
                            <h1 className='font-bold text-2xl'>200+</h1>
                            <p className='text-sm font-medium text-[#999999]'>Happy Customers</p>
                        </div>
                        <div className="bg-[#1A1A1A] h-23 p-4 text-center rounded-md border border-neutral-700">
                            <h1 className='font-bold text-2xl'>10k+</h1>
                            <p className='text-sm font-medium text-[#999999]'>Properties for Clients</p>
                        </div>

                        <div className="bg-[#1A1A1A] h-23 col-span-2 lg:col-span-1 p-4 text-center border border-neutral-700 rounded-md ">
                            <h1 className='font-bold text-2xl'>16+</h1>
                            <p className='text-sm font-medium text-[#999999]'>Years of Experience</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero