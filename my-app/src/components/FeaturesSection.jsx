import React from 'react'
import abstractThree from '../assets/abstractThree.svg'
import { features } from '../Constant';
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
                    <button className=' border border-neutral-700 w-full text-sm rounded-md bg-[#262626] py-3.5 px-5 text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#2f2f2f] hover:to-[#3a3a3a] hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5 hover:scale-[1.03] '><Link to="/Properties">View all Properties  </Link> </button>
                 </div>
                

            </div>
            <div className='   '>
                 <FeaturesSwiper features={features} />

                <hr className="border-t-2 border-neutral-700 my-4" />

            </div>
        </div>

                <div className='flex justify-between'>
                    <div>
                      <p>01/10</p>
                    </div>
                    <div className='flex gap-2.5'>
                        <ArrowLeft className='border rounded-2xl border-neutral-700 hover:bg-neutral-800' />
                        <ArrowRight className='border rounded-2xl  border-neutral-700 hover:bg-neutral-800'/>
                        
                    </div>
                </div>
            
            
        
    </div>
  )
}

export default FeaturesSection