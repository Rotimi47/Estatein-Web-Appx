import React from 'react'
import textIcon from '../assets/textIcon.svg';
import phoneIcon from '../assets/phoneIcon.svg';
import mapIcon from '../assets/mapIcon.svg';
import estateinIcon from '../assets/estateinIcon.svg'
import arrowUpLeft from '../assets/arrowUpLeft.svg'

const Contact = () => {
  return (
    <div className='2xl:max-w-380 2xl:mx-auto'>
        <div className="flex flex-col gap-2.5 py-12.5 px-4 lg:py-24.5 lg:pl-20 lg:pr-50 bg-linear-to-r from-neutral-800 to-black ">
            <h1 className='text-[28px] font-semibold bg-b'>Get in Touch with Estatein</h1>
            <p className='text-sm font-medium text-neutral-500'>Welcome to the Estatein Contact Us page, We're here to assist you with any inquiries, requests, or feedback you may have. <span className='hidden lg:block'>Whether you are looking to buy or sell a proprty, explore investment opportunities, or simply want to connect, we're a message away. Reach out to us, and let's start a conversation.</span> </p>
        </div>
        <div className='w-full'>
             <div className='border border-neutral-700 rounded-md shadow-[0_0_10px_#333]'>
                        <div className="grid grid-cols-2 gap-2.5 py-2.5 px-2.5 lg:grid-cols-4 ">
                            <div className="relative bg-[#1A1A1A] h-36 rounded-md  py-5 px-3.5">
                                <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                                <div className='flex  justify-center items-center flex-col gap-3.5'>
                                    <img className='w-12' src={textIcon} alt="icon" /> 
                                    <p className='text-sm text-center font-semibold'>info@estatein.com</p>
                                </div>
                            </div>
                            <div className=" relative bg-[#1A1A1A] h-36 rounded-md  py-5 px-3.5">
                                <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                                <div className='flex  justify-center items-center flex-col gap-3.5'>
                                    <img className='w-12' src={phoneIcon} alt="icon" /> 
                                    <p className='text-sm text-center font-semibold'>+234 814 066 3316</p>
                                </div>
                            </div>
                            <div className="relative bg-[#1A1A1A] h-36 rounded-md  py-5 px-3.5">
                                <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                                <div className='flex justify-center items-center flex-col gap-3.5'>
                                    <img className='w-12' src={mapIcon} alt="icon" /> 
                                    <p className='text-sm text-center font-semibold'>Main Headquarters</p>
                                </div>
                            </div>
                            <div className="relative bg-[#1A1A1A] h-36 rounded-md py-5 px-3.5">
                                <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                                <div className='flex  justify-center items-center flex-col gap-3.5'>
                                    <img className='w-12' src={estateinIcon} alt="icon" /> 
                                    <p className='text-sm text-center font-semibold'>Instagram linkedin Facebook</p>
                                </div>
                            </div>
                        </div>
            
            
                    </div>
        </div>

    </div>
  )
}

export default Contact