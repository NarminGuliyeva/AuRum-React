import React from 'react'

function ShipAbout({ servicesabout }) {
    return (
        <div className='services-about-content'>
            <div className='count-ship'>
                <span className='count'>{servicesabout.id}</span>
            </div>
            <div className='txt-ship-services'>
                <p>{servicesabout.text}</p>
            </div>
        </div>
    )
}

export default ShipAbout