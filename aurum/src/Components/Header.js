import React, { useRef, useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../css/style.css'
import menuData from '../Data/Menu'
import shipsData from '../Data/Ships'
import blogsData from '../Data/Blogs'

function Header() {
    const navMenu = menuData.slice(0, 7);
    const location = useLocation();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const {shipslug} = useParams();
    const {blogslug} = useParams();
    const [pageTitle, setPageTitle] = useState();
    useEffect(() => {
        const currentPage = menuData.find((data) => {
            if (data.url === location.pathname) {
              return true;
            } else if (data.subServices) {
              return data.subServices.some((subService) => subService.url === location.pathname);
            }
            return false;
          });

        const currentPageTitle = currentPage ? (currentPage.subServices ? currentPage.subServices.find(subService => subService.url === location.pathname).title : currentPage.title) : '';
        const currentShip = shipsData.find((data) => data.name.toLocaleLowerCase()===decodeURIComponent(shipslug))
        const currentBlog= blogsData.find((data) => data.name.toLocaleLowerCase()===decodeURIComponent(blogslug))
        if(currentPage){
            setPageTitle(currentPageTitle)
        }
        else {
            if (currentShip) {
                setPageTitle(currentShip.name)
            }
            else if (currentBlog) {
                setPageTitle(currentBlog.name)
            }
        }
    },[location])
    return (
        <>
            <header className={`${location.pathname === '/' ? 'home-header' : 'page-header'}`}>
                <div className='logo-header contain space-between'>
                    <div className='icons space-between'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div className='logo'>
                        <img src='/img/logo (5) 1.png'></img>
                    </div>
                    <div className='lang  space-between'>
                        <button>Az<hr /></button>
                        <button>Ru<hr /></button>
                        <button>En<hr /></button>
                    </div>
                </div>
                <nav className='contain'>
                    <ul className={`menu ${isMenuVisible ? 'visible' : 'hidden'}`}>
                        {
                            navMenu.map((item) => (
                                <li key={item.id} id={`${item.title}`} className='nav-li'>
                                    {
                                        item.subServices ? (
                                            <>
                                                <p className='nav-link link'>{item.title}</p>
                                                <ul className='sub-menu'>
                                                    {
                                                        item.subServices.map((subItem) => (
                                                            <li key={subItem.id} className='nav-li'>
                                                                <Link to={`${subItem.url}`} className='link nav-link'>{subItem.title}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        ) : (
                                            < Link to={`${item.url}`} className='link nav-link'>{item.title}</Link>
                                        )
                                    }
                                    <hr></hr>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="nav-bar" type="button" onClick={toggleMenu}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <hr className='hr'></hr>
                    {/* <Outlet /> */}
                </nav>
                <div className='about-header'>
                    <h2>The standard Lorem Ipsum passage</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='btn btn-more'>ƏTRAFLI</button>
                </div>
                <div className='page-title'>
                    <h1>
                        {pageTitle}
                    </h1>
                </div>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='swiper-img'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-img'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-img'></div>
                    </SwiperSlide>
                </Swiper>
            </header >
        </>
    )
}

export default Header