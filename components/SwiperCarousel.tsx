// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';



const SwiperCarousel = () => {
console.log( window.matchMedia('(max-width:488px)')
)

const [isMobileDevice, setIsMobileDevice] = useState(window.matchMedia('(max-width:488px)').matches)

  // const isMobileDevice =window.matchMedia('(max-width:488px)').matches
  console.log(isMobileDevice)




  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>

    <img src="/shoe2.avif" alt="shoe"  className='w-full h-[450px] sm:h-[250px] rounded-lg' />

    </SwiperSlide>
 
    <SwiperSlide>

<img src="/shoe1.avif" alt="shoe"  className='w-full h-[450px] sm:h-[250px] rounded-lg' />

</SwiperSlide>   <SwiperSlide>

<img src="/shoe3.avif" alt="shoe"  className='w-full h-[450px] sm:h-[250px] rounded-lg' />

</SwiperSlide>   <SwiperSlide>

<img src="/shoe4.avif" alt="shoe"  className='w-full h-[450px] sm:h-[250px] rounded-lg' />

</SwiperSlide>   <SwiperSlide>

<img src="/shoe5.avif" alt="shoe"  className='w-full h-[450px] sm:h-[250px] rounded-lg' />

</SwiperSlide>
  
  </Swiper>
  )
}
export default SwiperCarousel