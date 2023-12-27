import React from 'react'
import { useLocation } from 'react-router-dom'

function Mission({mission}) {
    const location = useLocation();
    return (
        <div className='card-mission col-sm-4'>
            <div className='img-mission'>
                <img src={`./img/${mission.img}`}></img>
            </div>
            <h4>{mission.name}</h4>
            <p>{mission.info}</p>
            <button className={`${location.pathname === '/' ? 'btn btn-more' : 'none'}`}>ƏTRAFLI</button>
            <span className={`${location.pathname === '/' ? 'none' : ''} count`}>{mission.id}</span>
        </div>
    )
}

export default Mission