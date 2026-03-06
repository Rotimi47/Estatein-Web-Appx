import React from 'react'
import {Mail} from 'lucide-react'
import {Phone} from 'lucide-react'
import {MapPin} from 'lucide-react'



const DiscoverLoc = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        <div className='flex flex-col gap-10'>
            <div>
                <h1 className='text-[28px] font-semibold'>Discover Our Office Locations </h1>
                <p className='text-sm font-medium text-neutral-500'>Estatein is here to serve you across multiple locations. Whether you're looking to meet our team <span className='hidden lg:inline-block'>, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you </span> </p>
            </div>
            <div className='flex flex-col gap-7'>
                <div className='w-full flex gap-2.5 justify-center py-2.5 px-2.5 bg-neutral-900 rounded-md lg:justify-start lg:w-fit'>
                    <p className='px-5 py-3.5 border border-neutral-700 bg-neutral-950'>All</p>
                    <p className='px-5 py-3.5 border border-neutral-700'>Regional</p>
                    <p className='px-5 py-3.5 border border-neutral-700'>International</p>
                </div>
                <div className='flex flex-col gap-5 lg:flex-row'>
                    <div className='flex flex-col gap-6 border border-neutral-800 rounded-md py-6 px-6'>
                        <div className='flex flex-col gap-2'> 
                            <h3 className='text-sm font-medium'>Main Headquarters </h3>
                            <h1 className='text-xl font-semibold'>123 Estatein Plaza, City Center, Metropolis</h1>
                            <p className='text-sm font-medium text-neutral-500'>Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us. </p>
                        </div>
                        <div className='flex flex-col gap-2.5 lg:flex-row'>
                            <p className='flex w-fit items-center gap-2 border border-neutral-800 py-2.5 px-4  rounded-3xl bg-neutral-900'><Mail /> info@estatein.com</p>
                            <div className='flex gap-2.5'>
                               <p  className='flex border border-neutral-700 py-2.5 px-4 rounded-3xl bg-neutral-900'>  <Phone /> +234 078 3318</p>
                                <p className='flex border border-neutral-700 py-2.5 px-4 rounded-3xl bg-neutral-900'><MapPin /> Metropolis</p>
                            </div>

                        </div>
                        <div>
                            <button className='w-full text-sm py-3.5 px-5 bg-[#703BF7] rounded-md text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#7C4DFF] hover:to-[#9B6BFF] hover:shadow-lg hover:shadow-[#703BF7]/50 hover:-translate-y-0.5 hover:scale-[1.03]'>
                                 Get Direction 
                             </button>

                        </div>
                    </div>
                    <div className='flex flex-col gap-6 border border-neutral-800 rounded-md py-6 px-6'>
                        <div className='flex flex-col gap-2'> 
                            <h3 className='text-sm font-medium'>Regional Headquarters </h3>
                            <h1 className='text-xl font-semibold '>456 Urban Avenue, Downtime District, Metropolis</h1>
                            <p className='text-sm font-medium text-neutral-500'>Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us. </p>
                        </div>
                        <div className='flex flex-col gap-2.5 lg:flex-row'>
                            <div className='py-2.5 px-4 rounded-3xl bg-neutral-900 flex w-fit items-center gap-2 border border-neutral-800'><Mail /> <p>info@estatein.com</p></div>
                            <div className='flex gap-2.5'>
                                <p className='flex border border-neutral-700 py-2.5 px-4 rounded-3xl bg-neutral-900'> <Phone /> +234 078 3318</p>
                                <p className='flex border border-neutral-700 py-2.5 px-4 rounded-3xl bg-neutral-900'> <MapPin /> Metropolis</p>
                            </div>

                        </div>
                        <div>
                            <button className='w-full text-sm py-3.5 px-5 bg-[#703BF7] rounded-md text-white transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:from-[#7C4DFF] hover:to-[#9B6BFF] hover:shadow-lg hover:shadow-[#703BF7]/50 hover:-translate-y-0.5 hover:scale-[1.03]'>
                                 Get Direction 
                             </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default DiscoverLoc