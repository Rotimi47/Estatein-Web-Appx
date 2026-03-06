import React from 'react';
import heroImage from '../assets/heroImage.png';
import BrowseBtn from './UI/BrowseBtn';
import heroHome from '../assets/heroHome.png';
import heroWallet from '../assets/heroWallet.png';
import heroSun from '../assets/heroSun.png';
import heroBuilding from '../assets/heroBuilding.png'
import arrowUpLeft from '../assets/arrowUpLeft.svg'
import {Link} from 'react-router-dom'




const HeroSection = () => {
  return (
    <div className='w-full mx-auto mt-8 px-4 flex flex-col gap-10 lg:mt-0 lg:gap-0 2xl:max-w-380 2xl:mx-auto'>
        <div className='flex flex-col gap-10 lg:flex-row-reverse lg:gap-15' >
            <div className=''>
                <img className='rounded-lg lg:rounded-none lg:w-full' src={heroImage} alt="a building image" />
            </div>
            <div className='flex flex-col gap-10 lg:pl-20 justify-center'> 
                <div className='flex flex-col gap-4 '>
                    <h1 className='lg:w-80 text-[28px] leading-[1.2] font-semibold tracking-normal lg:text-[46]'>Discover Your Dream Property with Estatein </h1>
                    <p className='text-sm lg:text-base leading-normal tracking-normal font-medium text-[#999999]'>Your journey to finding the perfect property begins here. Explore our listings to find the homes that matches your dreams.</p>
                </div>
            
                <div className='flex flex-col lg:flex-row gap-4'> 
                    <div>
                        <button className='w-full lg:w-28 text-sm rounded-md bg-[#262626] py-3.5 px-5 text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#2f2f2f] hover:to-[#3a3a3a] hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5 hover:scale-[1.03]'><Link to="/about-us">Learn More </Link></button>
                    </div>
                    <div>
                        <BrowseBtn/>
                    </div>
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


        <div className='border border-neutral-700 rounded-md shadow-[0_0_10px_#333]'>
            <div className="grid grid-cols-2 gap-2.5 py-2.5 px-2.5 lg:grid-cols-4 ">
                <div className="relative bg-[#1A1A1A] h-36 rounded-md  py-5 px-3.5">
                    <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                    <div className='flex  justify-center items-center flex-col gap-3.5'>
                        <img className='w-12' src={heroHome} alt="icon" /> 
                        <p className='text-sm text-center font-semibold'>Find Your Dream Home</p>
                    </div>
                </div>
                <div className=" relative bg-[#1A1A1A] h-36 rounded-md  py-5 px-3.5">
                    <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                    <div className='flex  justify-center items-center flex-col gap-3.5'>
                        <img className='w-12' src={heroWallet} alt="icon" /> 
                        <p className='text-sm text-center font-semibold'>Unlock Property Value</p>
                    </div>
                </div>
                <div className="relative bg-[#1A1A1A] h-36 rounded-md  py-5 px-3.5">
                    <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                    <div className='flex justify-center items-center flex-col gap-3.5'>
                        <img className='w-12' src={heroBuilding} alt="icon" /> 
                        <p className='text-sm text-center font-semibold'>Effortless Property Management</p>
                    </div>
                </div>
                <div className="relative bg-[#1A1A1A] h-36 rounded-md py-5 px-3.5">
                    <span className='absolute right-2'><img src={arrowUpLeft} alt="arrow icon" /></span>
                    <div className='flex  justify-center items-center flex-col gap-3.5'>
                        <img className='w-12' src={heroSun} alt="icon" /> 
                        <p className='text-sm text-center font-semibold'>Smart Investment, Informed Decisions</p>
                    </div>
                </div>
            </div>


        </div>





    </div>
  )
}

export default HeroSection