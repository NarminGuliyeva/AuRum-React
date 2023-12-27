import React from 'react'
import ShipAbout from './ShipAbout'
import shipabout from '../Data/ShipAbout'
import portabout from '../Data/PortAbout'
import { useLocation } from 'react-router-dom'

function ServicesAbout() {
  const location = useLocation()
  let services = []
  if (location.pathname === '/shipagency') {
    services = shipabout
  }
  else if (location.pathname === '/portservice') {
    services = portabout
  }
  return (
    <section className='services-about'>
        <div className='contain services-about-contain'>
            {
                services.map(item=> {
                    return <ShipAbout servicesabout={item} key={item.id}/>
                })
            }
        </div>
    </section>
  )
}

export default ServicesAbout