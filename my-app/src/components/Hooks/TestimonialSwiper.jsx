import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


const TestimonialSwiper = ({testimonials}) => {
  return (
    <Swiper
     className="w-full"
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        speed={400}
        grabCursor={true}
        autoplay={{
            delay: 3000,
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
        {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className=" min-w-0">
                <div className='flex flex-col gap-6 border border-neutral-700 rounded-lg py-6 px-6 h-full'>
                    <div><img src={testimonial.icon} alt="Star rating icon" /></div>
                    <div className='flex flex-col gap-1.5'>
                        <h1 className='font-semibold text-lg'>{testimonial.title}</h1>
                        <p className='text-sm font-medium'>{testimonial.review}</p>
                    </div>
                    <div className='flex gap-2.5'>
                        <img src={testimonial.image} alt="Client image" />
                        <div>
                            <h2 className=' font-medium'>{testimonial.name}</h2>
                            <p className='text-sm font-medium text-neutral-500'>{testimonial.location}</p>
                        </div>
                    </div>

                </div>
               
                                   
            </SwiperSlide>
        ))}

    </Swiper>
  )
}

export default TestimonialSwiper
