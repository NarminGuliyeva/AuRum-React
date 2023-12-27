import React from 'react'
import '../css/ships.css'
import Layout from '../Components/Layout'
import ServicesGallery from '../Components/ServicesGallery'
import Ships from '../Components/Ships'
import ServicesVideo from '../Components/ServicesVideo'
import Title from '../Components/Title'
import { useLocation } from 'react-router-dom'
import shipsData from '../Data/Ships'

function Gemiler() {
    const location = useLocation()
    return (
        <Layout>
            <section className='ships-section bg-section' id={`${location.pathname === '/ships' ? '' : 'shipDetails'}`}>
                <div className='contain'>
                    <Title index={7} />
                    <div className='row ships-container'>
                        {
                            shipsData.map(item => (
                                <Ships key={item.id} shipsData={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <ServicesGallery />
            <ServicesVideo />
        </Layout>
    )
}

export default Gemiler