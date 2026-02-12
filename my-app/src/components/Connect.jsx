import React from 'react'
import ConnectEmail from './Forms/ConnectForm';

const Connect = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        <div className=' flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[28px] font-semibold'>Let's Connect</h1>
              <p className='text-sm font-medium text-neutral-500'>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. <span className='hidden lg:inline'>Whether you are a propective client, partner or simply curious about our services, we're here to answer your questions and provide the assistnce you need.</span></p>
            </div>
            <div>
              <ConnectEmail/>
            </div>
        </div>
    </div>
  )
}

export default Connect