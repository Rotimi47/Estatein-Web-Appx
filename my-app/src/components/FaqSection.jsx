import React from 'react'
import {FAQ} from '../Constant';
import abstractThree from '../assets/abstractThree.svg';
import {ArrowLeft , ArrowRight} from 'lucide-react';
import FaqSwiper from './Hooks/FaqSwiper';
import { Link } from 'react-router-dom';

const FaqSection = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        <img src={abstractThree} alt="start icon" />
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1.5'>
                <h1 className='font-semibold text-2xl'>Frequently Asked Questions</h1>
                <p className='text-sm font-medium text-neutral-400'>Find answers to common questions about Estatein's services, property listings and the real estate process . We're here to provide clarity and assist you every step of the way</p>
            </div>

            <div>
                <div className=''>
                  <FaqSwiper FAQ={FAQ} />

                </div>
                <div>
                    <hr className="border-t-2 border-neutral-700 my-4" />
                    <div className='flex justify-between'> 
                        <div>
                            <p>01/10</p>
                        </div>
                        <div className='flex gap-2.5'>
                                <ArrowLeft className='border rounded-2xl  border-neutral-700 hover:bg-neutral-800'/>
                                <ArrowRight className='border rounded-2xl  border-neutral-700 hover:bg-neutral-800'/>
                                
                        </div>
                    </div>

                </div>
            </div>
        
        </div>
    </div>
  )
}

export default FaqSection