import React from 'react'
import ExploreBtn from '../UI/ExploreBtn';

const ConnectForm = () => {
  return (
    <div className=' border border-neutral-800 py-5 px-5 rounded-lg flex flex-col gap-7 lg:py-20 lg:px-20'>
        <form className='grid grid-cols-1 gap-5 lg:grid-cols-3'> 
            <div className='flex flex-col gap-2.5'>
                <label htmlFor="username">First Name</label>
                <input id="username" type="text" placeholder='Enter First Name' 
                className='w-full flex-1 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-xs '/>
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="username">Last Name</label>
                <input id="username" type="text" placeholder='Enter Last Name' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder='Enter your Email' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder='Enter Phone Number' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div>


            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">Inquiry Type</label>
                <input id="text" type="text" placeholder='Select Inquiry Type' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div>


            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">How Did You Hear About Us</label>
                <input id="text" type="text" placeholder='Select' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text" >Message</label>
                <input id="text" type="text" placeholder='Enter your Message here' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div>

        </form>
        <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'> 

            <div className="flex items-start gap-2">
                <input
                    id="terms"
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-neutral-900"
                />

                <label htmlFor="terms" className="text-sm text-neutral-300">
                    I agree with{" "}
                    <a
                    href="/terms"
                    className="underline text-white hover:text-neutral-200"
                    >
                    Terms of Use and Privacy Policy
                    </a>
                </label>
               
            </div>

            <div>
                <button className='w-full lg:w-45 text-sm py-3.5 px-5 bg-[#703BF7] rounded-md'>
                    Send Your Message
                </button>
            </div>

        </div>

            
        
        
    </div>
  )
}

export default ConnectForm