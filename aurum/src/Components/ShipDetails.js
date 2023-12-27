import React from 'react'
import '../css/ships.css'
import Title from './Title'
import { Link, useLocation } from 'react-router-dom'
import ServicesVideo from './ServicesVideo'

function ShipDetails() {
    const location = useLocation()
    const ships = location.state.ships;
    return (
        <section className='bg-section ship-details'>
            <div className='contain'>
                <Title index={7} />
                <div className='row ship-container'>
                    <div className='col-sm-6 ship-card'>
                        <div className='img-border img-ship'>
                            <img src={`/img/${ships.img}`}></img>
                            <div className='name-ship'>
                                <h2>{ships.name}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 txt txt-ship'>
                        <p>{ships.text}</p>
                    </div>
                </div>
            </div>
            <ServicesVideo />
        </section>
    )
}

export default ShipDetails