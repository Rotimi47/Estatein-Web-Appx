import React from 'react'
import PropForm from './Forms/PropForm'

const PropertiesForm = () => {
  return (
    <div className='w-full mx-auto mt-10 px-4 max-w-7xl'>
        <div className='flex flex-col gap-10'> 
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-2xl'>Let's Make it Happen</h1>
                <p className='text-sm font-medium text-neutral-400'>Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find their perfect match. Don't wait; let's embark on this exciting journey together.</p>
            </div>
            <div>
                <PropForm/>
            </div>
        </div>
    
    </div>
  )
}

export default PropertiesForm