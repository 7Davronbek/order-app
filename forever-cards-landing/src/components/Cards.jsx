import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

const Cards = () => {
  return (
    <div className='Cards'>
      <div className="container">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          navigation={{
            clickable: true,
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className='w-100' src="img/card1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card3.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card4.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card5.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card6.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card7.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card8.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card9.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card10.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card11.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card12.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card13.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card14.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card15.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card16.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card17.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card18.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card19.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card20.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card21.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card22.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card23.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card24.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card25.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card26.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card27.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card28.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card29.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card30.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card31.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card32.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-100' src="img/card33.jpg" alt="" /></SwiperSlide>
        </Swiper>

        <div className="text-center more">
          <a href="https://t.me/forevercards">Посмотреть все</a>
        </div>
      </div>
    </div>
  )
}

export default Cards