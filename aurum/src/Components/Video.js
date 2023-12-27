import React from 'react'
import Title from './Title'

function Video() {
    return (
        <section className='video'>
            <div className='container'>
                <div className='txt-video text'>
                    <Title index={2}/>
                    <div className='txt'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <button className='btn btn-more'>ətraflı</button>
                </div>
                <div className='img-video img'>
                    <img src='/img/peter-hansen-MeGmdPNe36w-unsplash 1.png'></img>
                </div>
            </div>
        </section>
    )
}

export default Video