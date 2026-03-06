import React from 'react'
import abstractThree from '../assets/abstractThree.svg';
import { testimonials } from '../Constant';
import {ArrowLeft , ArrowRight} from 'lucide-react';
import TestimonialSwiper from './Hooks/TestimonialSwiper';





const Testimonials = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        <img src={abstractThree} alt="star icon" />
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1.5'>
                <h1 className='font-semibold text-2xl'>What Our Clients Say</h1>
                <p className='text-sm font-medium text-neutral-400'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            </div>
            <div>
                <div className=''>
                    <TestimonialSwiper testimonials={testimonials} />

                </div>
            </div>

            <hr className="border-t-2 border-neutral-700 my-4" />
        </div>

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
  )
}

export default Testimonials