import React from 'react'
import {ArrowLeft , ArrowRight} from 'lucide-react';
import { features } from '../Constant';
import FeaturesSwiper from "./Hooks/FeaturesSwiper";

const PropertiesSection = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between '>
                <div className='flex flex-col gap-1.5'>
                    <h1 className='font-semibold text-2xl '>Discover a World of Possibilities </h1>
                    <p className='text-sm font-medium text-neutral-400'> Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.</p>
                </div>
               
                

            </div>
            <div className='   '>
                 <FeaturesSwiper features={features} />

                <hr className="border-t-2 border-neutral-700 my-4" />

            </div>
        </div>

                <div className='flex justify-between'>
                    
                    <div className='flex gap-2.5'>
                        <ArrowLeft className='border rounded-2xl  border-neutral-700 hover:bg-neutral-800'/>
                        <ArrowRight className='border rounded-2xl  border-neutral-700 hover:bg-neutral-800'/>
                        
                    </div>
                </div>
            
            
        
    </div>
  )
}

export default PropertiesSection