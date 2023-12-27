import React from 'react'
import { Link } from 'react-router-dom'

function ServicesVideo() {
    return (
        <section className='video-gallery-section'>
            <div className='video-gallery container'>
                <div className='v-gallery'>
                    <Link to='/' className='link'><i className="fa-solid fa-play"></i></Link>
                    <img className='video-img' src='/img/viktor-ritsvall-bnVJraYBXkQ-unsplash 2.png'></img>
                </div>
                <div className='v-gallery'>
                    <Link to='/' className='link'><i className="fa-solid fa-play"></i></Link>
                    <img className='video-img' src='/img/nate-cheney-iPrYNHEBieE-unsplash 1.png'></img>
                </div>
                <div className='v-gallery'>
                    <Link to='/' className='link'><i className="fa-solid fa-play"></i></Link>
                    <img className='video-img' src='/img/joseph-barrientos-eUMEWE-7Ewg-unsplash 1.png'></img>
                </div>
                <div className='v-gallery'>
                    <Link to='/' className='link'><i className="fa-solid fa-play"></i></Link>
                    <img className='video-img' src='/img/johny-vino-B7zI7Gd3rgQ-unsplash 1.png'></img>
                </div>
            </div>
        </section>
    )
}

export default ServicesVideo