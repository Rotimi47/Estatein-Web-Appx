import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

const PropertyGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full mx-auto mt-10 px-4 max-w-7xl bg-neutral-800 rounded-xl p-4">
      
      {/* MAIN IMAGE */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        className="rounded-xl mb-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.image}
              alt="Property"
              className="w-full h-105 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={6}
        spaceBetween={10}
        watchSlidesProgress
        className="cursor-pointer"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.image}
              alt="Thumbnail"
              className="h-20 w-full object-cover rounded-md opacity-80 hover:opacity-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertyGallery;
