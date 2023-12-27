import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Partner from './Partner';
import partnersData from '../Data/Partners'
import { useLocation } from 'react-router-dom';

function Partners() {
    const location = useLocation()
    return (
        <section className='partners' id={`${location.pathname === '/partners' ? 'Partners' : ''}`}>
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop ={true}
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
                            slidesPerView: 5,
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        partnersData.map(item => {
                            return <SwiperSlide><Partner partner={item} key={item.id} /> </SwiperSlide>
                        })
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default Partners