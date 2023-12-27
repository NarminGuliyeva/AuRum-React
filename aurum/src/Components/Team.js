import React from 'react'
import teamData from '../Data/Team';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TeamDetails from './TeamDetails';

function Team() {
  return (
    <section className='team-section'>
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
            teamData.map(item => {
              return <SwiperSlide><TeamDetails team={item} key={item.id} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Team