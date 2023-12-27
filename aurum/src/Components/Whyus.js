import React, { useEffect } from 'react'
import '../css/about.css'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import missionData from '../Data/Mission'
import Mission from './Mission';

function Whyus() {
    return (
        <section className='whyus-services bg-section'>
            <div className='whyUs container'>
                <div className='txt-whyus text'>
                    <Title index={0}/>
                    <div className='txt'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className='img-whyus img img-border'>
                    <img src='./img/douglas-bagg-EmHeYdjEMKw-unsplash 1.png'></img>
                </div>
            </div>
            <div className='mission container'>
                <Title index={1}/>
                <div className='mission-container row'>
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
                            slidesPerView :1,
                        },
                        768: {
                            slidesPerView :2,
                        },
                        1024: {
                            slidesPerView :3,
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        missionData.map(item => {
                            return <SwiperSlide><Mission mission={item} key={item.id} /></SwiperSlide>
                        })
                    }
                </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Whyus