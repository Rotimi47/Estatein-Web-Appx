import React from 'react';
import facebook from '../assets/facebook.svg';
import linkedIn from '../assets/linkedIn.svg';
import twitterIcon from '../assets/twitterIcon.svg';
import YoutubeIcon from '../assets/YoutubeIcon.svg'

const SocialMedia = () => {
  return (
    <div className='w-full bg-[#262626] py-5 px-4 lg:px-18 2xl:max-w-380 2xl:mx-auto 4xl:max-w-7xl 4xl:mx-auto'>
        <div className='flex flex-col gap-5 lg:flex-row-reverse lg:justify-between'> 
            <div className='flex gap-2 justify-center'>
                <div className='bg-black rounded-full px-5 py-5 items-center lg:w-13 lg:h-13'> <img src={facebook} alt="facebook" /></div>
                <div className='bg-black rounded-full px-5 py-5 items-center lg:w-13 lg:h-13'><img src={linkedIn} alt="linkedin" /></div>
                <div className='bg-black rounded-full px-5 py-5 items-center lg:w-13 lg:h-13'><img src={twitterIcon} alt="twitter" /></div>
                <div className='bg-black rounded-full px-5 py-5 items-center lg:w-13 lg:h-13'><img src={YoutubeIcon} alt="youtube" /></div>

            </div>
            <div className='flex flex-col gap-2.5 lg:flex-row lg:items-center'>
                <p className='text-center text-sm'>@ 2026 Estatein. All Rights Reserved</p>
                <p className='text-center text-sm'>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia