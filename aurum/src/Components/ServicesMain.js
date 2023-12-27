import React from 'react'
import shipAgency from '../Data/ShipAgency'
import portService from '../Data/PortService'
import ShipService from './ShipService'
import { useLocation } from 'react-router-dom'

function ServicesMain() {
    const location = useLocation()
    let services = []
    if (location.pathname === '/shipagency') {
        services = shipAgency
    }
    else if (location.pathname === '/portservice') {
        services = portService
    }
    return (
        <section className='services-section bg-section'>
            {
                services.map(item => {
                   return <ShipService shipservice={item} key={item.id}/>
                })
            }
        </section>
    )
}
export default ServicesMain