import React from 'react'
import Layout from '../Components/Layout'
import blogsData from '../Data/Blogs'
import Blog from '../Components/Blog'
import '../css/blogs.css'

function Bloqlar() {
  return (
    <Layout>
        <section className='bg-section blogs-section'>
            <div className='container blog-container'>
                {
                    blogsData.map(item=>{
                        return <Blog blogsData={item} keys={item.id}/>
                    })
                }
            </div>
        </section>
    </Layout>
  )
}

export default Bloqlar