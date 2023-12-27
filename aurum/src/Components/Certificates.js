import React from 'react'
import Title from './Title'
import certificateData from '../Data/Certificates'
import Certificate from './Certificate'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Certificates() {
  return (
    <section className='certificate-section'>
      <Title index={4}/>
      <div className='container'>
        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            }
          }}
          className="mySwiper"
        >
          {
            certificateData.map(item => {
              return <SwiperSlide><Certificate certificate={item} key={item.id} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Certificates