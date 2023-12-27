import React from 'react'

function Certificate({certificate}) {
  return (
    <div className='certificate col-sm-3 '>
        <img className='frame' src='/img/ramka 1.png'></img>
        <img className='img-certificate' src={`/img/${certificate.img}`}></img>
    </div>
  )
}

export default Certificate