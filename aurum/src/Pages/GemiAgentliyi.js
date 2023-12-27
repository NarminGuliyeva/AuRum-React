import React from 'react'
import Layout from '../Components/Layout'
import '../css/services.css'
import ServicesMain from '../Components/ServicesMain'
import ServicesAbout from '../Components/ServicesAbout'
import ServicesGallery from '../Components/ServicesGallery'
import ServicesVideo from '../Components/ServicesVideo'

function GemiAgentliyi() {
    return (
        <Layout>
            <ServicesMain/>
            <ServicesAbout/>
            <ServicesGallery/>
            <ServicesVideo/>
        </Layout>
    )
}

export default GemiAgentliyi