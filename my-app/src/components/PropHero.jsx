import React from 'react'
import { MapPin, Home, Banknote, Box, Calendar } from "lucide-react";
import Dropdown from "./Hooks/Dropdown";
import SearchForm from './Forms/SearchForm';

const PropHero = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-0 2xl:max-w-380 2xl:mx-auto'>
        <div className="flex flex-col gap-2.5 py-12.5 px-4 lg:py-24.5 lg:pl-20 lg:pr-50 bg-linear-to-r from-neutral-800 to-black ">
            <h1 className='text-[28px] font-semibold bg-b'>Find Your Dream Property</h1>
            <p className='text-sm font-medium text-neutral-500'>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey. </p>
        </div>
        <div className='w-full mx-auto px-4 max-w-7xl flex flex-col gap-5 lg:gap-0'>
            <div className=' '>
                <SearchForm/>
    
            </div>
            <div className=' bg-neutral-900 px-5 py-5 rounded-lg'>
                <form className="grid grid-cols-1 gap-4 lg:grid-cols-5 ">
                    <Dropdown
                        icon={MapPin}
                        placeholder="Location"
                        options={[
                        "Lagos Mainland",
                        "Victoria Island",
                        "Lekki Phase 1",
                        "Ikoyi",
                        "Abuja - Maitama",
                        ]}
                        
                    />

                    <Dropdown
                        icon={Home}
                        placeholder="Property Type"
                        options={[
                        "Apartment",
                        "Detached House",
                        "Semi-Detached",
                        "Duplex",
                        "Penthouse",
                        ]}
                    />

                    <Dropdown
                        icon={Banknote}
                        placeholder="Pricing Range"
                        options={[
                        "₦50M - ₦100M",
                        "₦100M - ₦250M",
                        "₦250M - ₦500M",
                        "₦500M+",
                        ]}
                    />

                    <Dropdown
                        icon={Box}
                        placeholder="Property Size"
                        options={[
                        "1 - 2 Bedrooms",
                        "3 Bedrooms",
                        "4 Bedrooms",
                        "5+ Bedrooms",
                        ]}
                    />

                    <Dropdown
                        icon={Calendar}
                        placeholder="Build Year"
                        options={[
                        "2024 - Present",
                        "2020 - 2023",
                        "2015 - 2019",
                        "Before 2015",
                        ]}
                    />
                 </form>

            </div>
        </div>
    </div>
  )
}

export default PropHero