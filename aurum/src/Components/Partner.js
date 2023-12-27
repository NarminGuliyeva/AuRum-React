import React from 'react'

function Partner({partner}) {
    return (
        <div className='col img-part'>
            <img src={`/img/${partner.img}`}></img>
        </div>
    )
}

export default Partner