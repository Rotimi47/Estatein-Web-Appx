import React from 'react'
import abstractThree from '../assets/abstractThree.svg'
import trustIcon from '../assets/trustIcon.svg'
import exeIcon from '../assets/exeIcon.svg'
import comIcon from '../assets/comIcon.svg'
import clientIcon from '../assets/clientIcon.svg'


const Values = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl lg:mt-20'>
        <img className='lg:hidden' src={abstractThree} alt="" />
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-15'>
            <div className='lg:w-103 lg:mt-30 flex flex-col gap-2.5'>
                <h1 className='text-[28px] leading-[1.2] font-semibold tracking-normal lg:text-[46]'>Our Values</h1>
                <p className='text-sm lg:text-base leading-normal tracking-normal font-medium text-[#999999]'>Our story is one of continous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
            </div>
            <div className='relative grid grid-cols-1 gap-5 shadow-[0_0_10px_#333] lg:grid-cols-2 border border-neutral-700 py-6 px-6 rounded-lg lg:py-12.5 lg:px-12.5 '>
                {/* horizontal divider */}
                <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-neutral-700 -translate-y-1/2 mx-6  "></div>

                <div className='flex flex-col gap-3.5'>
                    <div className='flex items-center gap-2'>
                        <img src={trustIcon} alt="" />
                        <p>Trust</p>
                    </div>
                    <div>
                        <p>Trust is the cornerstone of every real estate transaction.</p>
                    </div>
                    <div>
                         <hr className="border-t-2 border-neutral-700 my-4 lg:border-none" />
                    </div>
                </div>
                <div className='flex flex-col gap-3.5 lg:border-l border-neutral-700 lg:pl-5 '>
                     <div  className='flex items-center gap-2'>
                        <img src={exeIcon} alt="" />
                        <p>Excellence</p>
                    </div>
                    <div>
                        <p>Trust is the cornerstone of every real estate transaction.</p>
                    </div>
                    <div>
                         <hr className="border-t-2 border-neutral-700 my-4 lg:border-none" />
                    </div>
                </div>
                <div className='flex flex-col gap-3.5 lg:mt-2 '>
                     <div  className='flex items-center gap-2'>
                        <img src={clientIcon} alt="" />
                        <p>Client-Centric</p>
                    </div>
                    <div>
                        <p>Trust is the cornerstone of every real estate transaction.</p>
                    </div>
                    <div>
                         <hr className="border-t-2 border-neutral-700 my-4 lg:border-none" />
                    </div>
                </div>
                <div className='flex flex-col gap-3.5 lg:border-l border-neutral-700 lg:pl-5 lg:mt-2'>
                     <div  className='flex items-center gap-2'>
                        <img src={comIcon} alt="" />
                        <p className=''> Our Commitment</p>
                    </div>
                    <div>
                        <p>Trust is the cornerstone of every real estate transaction.</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Values