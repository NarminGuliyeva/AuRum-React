import React from 'react'
import Title from './Title'
import { useLocation } from 'react-router-dom'

function ShipService({shipservice}) {
  const location = useLocation()
  return (
    <div className='services-main container'>
      <div className='col-sm-6 txt-ship-services'>
        <Title index={`${location.pathname==='/shipagency' ? `${5}`: `${6}`}`} />
        <p>{shipservice.text}</p>
      </div>
      <div className='col-sm-6 img-ship-services img-border'>
        <img src={`/img/${shipservice.img}`}></img>
      </div>
    </div>
  )
}

export default ShipService