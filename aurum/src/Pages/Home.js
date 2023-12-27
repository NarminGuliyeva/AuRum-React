import React from 'react'
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import Whyus from '../Components/Whyus'
import Counter from '../Components/Counter'
import '../css/home.css'
import Video from '../Components/Video'
import Partners from '../Components/Partners'
import Blogs from '../Components/Home/Blogs'

function Home() {
  return (
    <Layout>
        <Whyus/>
        <Counter/>
        <Video/>
        <Partners/>
        <Blogs/>
    </Layout>
  )
}

export default Home