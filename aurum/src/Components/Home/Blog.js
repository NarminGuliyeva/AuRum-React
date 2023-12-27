import React from 'react'

function Blog({ blogs }) {
    return (
        <div className='blog blog-home col-sm-4'>
            <div className='img-border'>
                <img src={`/img/${blogs.img}`}></img>
            </div>
            <div className='info-blog'>
                <div className='date-blog part-blog'>
                    <i class="fa-solid fa-calendar"></i>
                    <p>{blogs.date}</p>
                </div>
                <div className='txt-blog part-blog'>
                    <h2>{blogs.name}</h2>
                </div>
                <div className='view-comments'>
                    <div className='view part-blog'>
                        <i class="fa-solid fa-eye"></i>
                        <p>{blogs.view} view</p>
                    </div>
                    <div className='comments part-blog'>
                        <i class="fa-solid fa-comments"></i>
                        <p>{blogs.comments} comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog