import React from 'react'
import Dropdown from "../Hooks/Dropdown";


const PropForm = () => {
  return (
    <div className='border border-neutral-800 py-5 px-5 rounded-lg flex flex-col gap-7 lg:py-20 lg:px-20'>
        <form className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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

            <div className="flex flex-col gap-2.5">
                <label>Preferred Location</label>

                <Dropdown
                    placeholder="Select Location"
                    options={[
                    "Lagos Mainland",
                    "Victoria Island",
                    "Lekki Phase 1",
                    "Ikoyi",
                    "Abuja - Maitama",
                    ]}
                />
            </div>



            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">Property Type</label>
                
                <Dropdown
                    placeholder="Select Property Type"
                    options={[
                    "Duplex",
                    "Semi-Detached House",
                    "Detached House",
                    "Penthouse",
                    "Condominium (Condo)",
                    ]}
                />
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text" >No. of Bathrooms</label>

                
                    <Dropdown
                        placeholder="Select no. of Bathrooms"
                        options={[
                        "1 - 2 Bathrooms",
                        "3 Bathrooms",
                        "4 Bathrooms",
                        "5+ Bathrooms",
                        ]}
                    />
                
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">No. of Bedrooms</label>

                    <Dropdown
                        placeholder="Select no. of Bedrooms"
                        options={[
                        "1 - 2 Bedrooms",
                        "3 Bedrooms",
                        "4 Bedrooms",
                        "5+ Bedrooms",
                        ]}
                    />
               
            </div>

            <div className='flex flex-col gap-2.5'>
                <label htmlFor="text">Budget</label>

                 <Dropdown
                        
                        placeholder="Select Budget"
                        options={[
                        "₦50M - ₦100M",
                        "₦100M - ₦250M",
                        "₦250M - ₦500M",
                        "₦500M+",
                        ]}
                    />
               
            </div>

             <div className='flex flex-col gap-2.5'>
                <label htmlFor="email">Preferred Contact Method</label>
                <input id="email" type="tel" placeholder='Enter your Number' 
                className='w-full flex-1 rounded-lg border border-neutral-700  bg-neutral-900 px-4 py-3 text-xs'/>
            </div> 

            <div className='flex flex-col gap-2.5'>
                <input id="email" type="email" placeholder='Enter your Email' 
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

export default PropForm