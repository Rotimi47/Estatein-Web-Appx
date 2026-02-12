import React from 'react'
import logoMobile from '../assets/logoMobile.svg';
import Email from './Forms/Email'

const Footer = () => {
  return (
      <div className='w-full  mt-10 px-4 lg:py-20 lg:px-20 2xl:max-w-380 2xl:mx-auto 4xl:max-w-7xl 4xl:mx-auto'>
          <div className='flex flex-col gap-12.5 lg:flex-row lg:justify-between'>
            <div className='flex flex-col gap-5'>
              <div><img src={logoMobile} alt="logo icon" /> </div>
              <Email/>
            </div>

            <div className=' text-white px-6 py-10 lg:px-0 lg:py-0'> 
              <div className='space-y-10 lg:space-y-0 lg:flex lg:gap-20'>

                  {/* ROW 1 */}

                  <div className='grid grid-cols-2 border-b border-neutral-800 pb-8 lg:flex lg:border-none lg:pb-0 lg:gap-20 '>

                    {/* Left */}

                    <div className='pr-6 border-r border-neutral-800 lg:pr-0 lg:border-none'>
                      <h3 className="mb-4 text-neutral-400">Home</h3>
                      <ul className='space-y-3'>
                        <li>Hero Section</li>
                        <li>Features</li>
                        <li>Properties</li>
                        <li>Testimonials</li>
                        <li>FAQ's</li>

                      </ul>
                    </div>

                    {/* Right */}

                    <div className='pl-6 lg:pl-0'>
                      <h3 className="mb-4 text-neutral-400">About Us</h3>
                      <ul className='space-y-3'>
                        <li>Our Story</li>
                        <li>Our Works</li>
                        <li>How It Works</li>
                        <li>Our Team</li>
                        <li>Our Clients</li>
                      </ul>
                    </div>

                  </div>

                  {/* ROW 2 */}

                  <div className='grid grid-cols-2  border-b border-neutral-800 pb-8 lg:flex lg:border-none lg:pb-0 lg:gap-20'>

                    <div className='pr-6 border-r border-neutral-800 lg:pr-0 lg:border-none'>
                      <h3 className="mb-4 text-neutral-400">Properties</h3>
                      <ul className='space-y-3'>
                        <li>Portfolio</li>
                        <li>Categories</li>
                      </ul>
                    </div>


                    <div className='pl-6 lg:pl-0'>
                      <h3 className="mb-4 text-neutral-400">Services</h3>
                      <ul className='space-y-3'>
                         <li>Valuation Mastery</li>
                          <li>Strategic Marketing</li>
                          <li>Negotiation Wizardry</li>
                          <li>Closing Success</li>
                          <li>Property Management</li>
                      </ul>
                    </div>

                   </div>

                     {/* ROW 3 */}

                     <div className='grid grid-cols-2 lg:flex lg:gap-20'>

                      <div className='pr-6 border-r border-neutral-800 lg:pr-0 lg:border-none'>
                        <h3 className="mb-4 text-neutral-400">Contact Us</h3>
                        <ul className='space-y-3'>
                          <li>Contact Form</li>
                          <li>Our Offices</li>
                        </ul>
                      </div>

                     </div>

              </div>

            </div>

            
          </div>

         


        
      </div>

  )
}

export default Footer