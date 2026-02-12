import React from 'react'
import abstractThree from '../assets/abstractThree.svg'
import { features } from '../Constant';
import ViewBtn from './UI/ViewBtn';
import {ArrowLeft , ArrowRight} from 'lucide-react';
import FeaturesSwiper from "./Hooks/FeaturesSwiper";
import { Link } from "react-router-dom";






const FeaturesSection = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        <img src={abstractThree} alt="star icon" />
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between '>
                <div className='flex flex-col gap-1.5'>
                    <h1 className='font-semibold text-2xl '>Featured Properties</h1>
                    <p className='text-sm font-medium text-neutral-400'> Explore our handpicked selection of featured Properties. Each listing offers a glimpse of into exceptional homes and investments available through Estatein.</p>
                </div>
                <div className='hidden lg:block'>
                    <button className=' border border-neutral-700 w-full text-sm rounded-md bg-[#262626] py-3.5 px-5 '>View All Properties</button>
                 </div>
                

            </div>
            <div className='   '>
                 <FeaturesSwiper features={features} />

                <hr className="border-t-2 border-neutral-700 my-4" />

            </div>
        </div>

                <div className='flex justify-between'>
                    <div>
                        <button className=' border border-neutral-700 w-full text-sm rounded-md bg-[#262626] py-3.5 px-5 '>
                            <Link to="/ViewProperty">View all Properties  </Link> 
                        </button>
                    </div>
                    <div className='flex'>
                        <ArrowLeft />
                        <ArrowRight />
                        
                    </div>
                </div>
            
            
        
    </div>
  )
}

export default FeaturesSection