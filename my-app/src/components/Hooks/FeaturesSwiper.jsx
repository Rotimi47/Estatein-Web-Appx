import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import ViewBtn from '../UI/ViewBtn'; 
import { Autoplay } from "swiper/modules"; 


const FeaturesSwiper = ({ features }) => { 
    return ( 
        <Swiper 
            className="w-full" 
            slidesPerView={1} 
            spaceBetween={24} 
            loop={true} 
            speed={400} 
            grabCursor={true} 
            autoplay={{ delay: 5000, 
            disableOnInteraction: false, }} 
            modules={[Autoplay]} 
            breakpoints={{ 
                640: { slidesPerView: 1 }, 
                768: { slidesPerView: 2 }, 
                1024: { slidesPerView: 2.5 }, 
                1280: { slidesPerView: 3 }, 
            }} 
        > 
            {features.map((feature, index) => ( 
                <SwiperSlide key={index} className="min-w-0"> 
                    <div className="border border-neutral-700 rounded-lg py-6 px-6 h-full"> 
                        <div className="flex flex-col gap-4"> 
                            <img className="rounded-md" src={feature.image} alt="featured building image" /> 
                            <h1>{feature.name}</h1> <p>{feature.description}</p> 
                            <div className="flex flex-wrap gap-2.5"> 
                                {feature.icon?.map((icon, i) => ( 
                                    <div key={i} className="flex items-center gap-1.5 border border-neutral-700 px-3.5 py-1 rounded-xl bg-neutral-800" > 
                                        <img src={icon.src} alt={icon.label} /> <span>{icon.label}</span> </div> ))} 
                                    </div> 
                                    <div className=" flex justify-between"> 
                                        <div> <h2>Price</h2> <h1>{feature.price}</h1> 
                                         
                                    </div> 
                                    
                                      <ViewBtn id={feature.id} />  
                            </div> 
                        </div> 
                    </div> 
                </SwiperSlide>
            ))} 
        </Swiper> 
    ); 
}; 

export default FeaturesSwiper;
