import React from 'react'
import Title from '../Title'
import Blog from './Blog'
import blogsData from '../../Data/Blogs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Blogs() {
    return (
        <section className='blogs-home-section'>
            <div className='contain'>
                <Title index={3}/>
                <div className='row'>
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
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            }
                        }}
                        className="mySwiper"
                    >
                        {
                            blogsData.map(item => {
                                return <SwiperSlide><Blog blogs={item} key={item.id} /></SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Blogs