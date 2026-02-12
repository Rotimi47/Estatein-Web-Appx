import React from 'react'

const PropPricing = ({title, price}) => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl flex flex-col gap-10'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl'>Comprehensive Pricing Details</h1>
            <p className='text-sm font-medium text-neutral-400'>At Estatein, transparency is key, we want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for {title} to help you make an informed decision.</p>
        </div>
        <div className='flex flex-col gap-7'>
            <div className='border rounded-lg px-5 py-6 lg:10 bg-neutral-800 border-neutral-700 lg:flex lg:py-5 '>
                <h1 className='font-semibold text-1xl pb-2.5 lg:pr-4 lg:pb-0  '> Note</h1>
                <p className='border-t lg:border-t-0 lg:border-l lg:pl-4 pt-2.5 lg:pt-0 text-sm font-medium text-neutral-400 border-neutral-700'>The figures provided above are estimates and may vary depending on the property, location and owner circumstances.</p>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
                <div>
                    <h2 className='text-sm font-medium text-neutral-400'>Listing Price</h2>
                    <h1 className='font-semibold text-2xl'>NGN {price}</h1>
                </div>
                <div className='border rounded-lg py-5 px-5 border-neutral-700 lg:w-250'>
                    <div className='flex justify-between pb-5'>
                        <h1 className='font-semibold text-2xl'>Additonal Fees</h1>
                        <button className='lg:w-28 text-sm rounded-md bg-[#262626] py-3.5 px-5 border border-neutral-700'>Learn More</button>
                    </div>
                    <div className='grid grid-cols-1  lg:grid-cols-2 lg:gap-3'>
                        <div className='flex flex-col gap-2.5 border-t px-5 py-5 border-neutral-700'>
                            <h2 className='text-base font-medium text-neutral-400'>Home Inspection</h2>
                            <div className='flex gap-3'>
                                <h1>NGN10000</h1>
                                <p className='border px-3 py-1.5 rounded-2xl bg-neutral-900 border-neutral-700 text-sm font-medium text-neutral-400'>Recommended for due dilligence</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 border-t px-5 py-5 border-neutral-700 '>
                            <h2 className='text-base font-medium text-neutral-400'>Legal Fees</h2>
                            <div className='flex gap-3'>
                                <h1 className=''>NGN25000</h1>
                                <p className='border px-3 py-1.5 rounded-lg bg-neutral-900 border-neutral-700 text-sm font-medium text-neutral-400'>Approximate cost for legal services, including lease transfer</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 border-t px-5 py-5 border-neutral-700'>
                            <h2 className='text-base font-medium text-neutral-400'>Caution Fee</h2>
                            <div className='flex gap-3'>
                                <h1 className=''>NGN50000</h1>
                                <p className='border px-3 py-1.5 rounded-lg bg-neutral-900 border-neutral-700 text-sm font-medium text-neutral-400'>In case of unforseen circumstances that could lead to loss of property</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 border-t px-5 py-5 border-neutral-700 '>
                            <h2 className='text-base font-medium text-neutral-400'>Property Security</h2>
                            <div className='flex gap-3 '>
                                <h1>NGN20000</h1>
                                <p className='border px-3 py-1.5 rounded-lg bg-neutral-900 border-neutral-700 text-sm font-medium text-neutral-400'>Added miscellaneous for security personnel </p>
                            </div>
                        </div> 
                        <div className='flex flex-col gap-2.5 border-t px-5 py-5 border-neutral-700  '>
                            <h2 className='text-base font-medium text-neutral-400'>Property Tax</h2>
                            <div className='flex gap-3'>
                                <h1>Varies</h1>
                                <p className='border px-3 py-1.5 rounded-lg bg-neutral-900 border-neutral-700 text-sm font-medium text-neutral-400'>If applicable, consult with agent for specific details </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropPricing;