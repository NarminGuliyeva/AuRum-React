import React from 'react'
import {Link} from 'react-router-dom'

function Blog({ blogsData }) {
  return (
    <div className='blog'>
      <div className='img-blog'>
        <img src={`/img/${blogsData.img}`}></img>
      </div>
      <div className='info-blog'>
        <div className='part-blog'>
          <h2>{blogsData.name}</h2>
        </div>
        <div className='txt-blog'>
          <p>{blogsData.info}</p>
        </div>
        <div className='date-more'>
          <div className='date-blog part-blog'>
            <i class="fa-solid fa-calendar"></i>
            <p>{blogsData.date}</p>
          </div>
          <button className='btn'>
            <Link className='link' to={`/blogs/${encodeURIComponent(blogsData.name.toLocaleLowerCase())}`} state={{ blogs: blogsData }}>Ətraflı <i class="fa-solid fa-angle-right"></i></Link></button>
        </div>
      </div>
    </div>
  )
}

export default Blog