import React from 'react'
import abstractThree from '../assets/abstractThree.svg';

const Achievements = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl lg:mt-20'>
        <img className='lg:hidden' src={abstractThree} alt="" />

        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[28px] leading-[1.2] font-semibold tracking-normal lg:text-[46]'>Our Acievements</h1>
                <p className='text-sm lg:text-base leading-normal tracking-normal font-medium text-[#999999]'>Our story is one of continous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
            </div>
            <div className='flex flex-col gap-6 lg:flex-row'>
                <div className='flex flex-col gap-4 border border-neutral-700  rounded-lg shadow-[0_0_5px_#333] py-7 px-7'>
                    <h1>3+ Years of Excellence</h1>
                    <p>With over 3 years in the industry, we/ve amassed a wealth of knowledge and experience</p>
                </div>
                 <div className='flex flex-col gap-4 border border-neutral-700  rounded-lg shadow-[0_0_10px_#333] py-7 px-7'>
                    <h1>Happy Clients</h1>
                    <p>With over 3 years in the industry, we/ve amassed a wealth of knowledge and experience</p>
                </div>
                 <div className='flex flex-col gap-4 border border-neutral-700  rounded-lg shadow-[0_0_10px_#333] py-7 px-7'>
                    <h1>Industry Recognition</h1>
                    <p>With over 3 years in the industry, we/ve amassed a wealth of knowledge and experience</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Achievements