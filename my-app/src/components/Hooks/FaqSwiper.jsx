import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ReadBtn from '../UI/ReadBtn';



const FaqSwiper = ({FAQ}) => {
  return (
    <Swiper
        className="w-full"
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            speed={400}
            grabCursor={true}
            autoHeight={false}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3 },
            }}
    
    >
        {FAQ.map((FAQ, index) => (
            <SwiperSlide key={index} className=" flex flex-col">
                <div className='border border-neutral-700 rounded-lg py-7.5 h-full min-h-65 px-7.5'>
                    <div className='flex flex-col gap-5 h-full'>
                        <h2>{FAQ.question}</h2>
                        <p className='text-sm font-medium text-neutral-400 mt-4'>{FAQ.answer}</p>
                        <div className='mt-auto'>
                             <ReadBtn/>
                        </div>
                       
                    
                    </div>
                </div>

            </SwiperSlide>
        ))}

    </Swiper>
    
  )
}

export default FaqSwiper