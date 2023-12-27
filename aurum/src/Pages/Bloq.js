import React from 'react'
import Layout from '../Components/Layout'
import Title from '../Components/Title'
import Blog from '../Components/Blog'
import blogsData from '../Data/Blogs'
import ArchiveBlogs from '../Components/ArchiveBlogs'
import { useLocation } from 'react-router-dom'

function Bloq() {
    const location = useLocation()
    const blogs = location.state.blogs
    return (
        <Layout>
            <section className='blog-section bg-section'>
                <div className='container'>
                    <div className='blog-details blog'>
                        <div className='img-blog'>
                            <img src={`/img/${blogs.img}`}></img>
                        </div>
                        <h2>{blogs.name}</h2>
                        <div className='date-blog part-blog date-more'>
                            <i class="fa-solid fa-calendar"></i>
                            <p>{blogs.date}</p>
                        </div>
                        <div className='txt-blog'>
                            <p>{blogs.info}</p>
                        </div>
                    </div>
                    <div className='other-blogs blog-container'>
                        <Title index={8}/>
                        {
                            blogsData.map(item => {
                                return <Blog blogsData={item} key={item.id} />
                            })
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Bloq