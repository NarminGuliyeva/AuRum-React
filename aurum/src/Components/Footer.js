import React from 'react'
import { Link } from 'react-router-dom'
import menuData from '../Data/Menu'

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='col-sm-4 logo-footer'>
                    <img src='/img/logo (5) 1.png'></img>
                </div>
                <div className='col-sm-4 menu'>
                    <ul>
                        {
                            menuData.map(item => (
                                <li key={item.id}>
                                    <Link to={`${item.url}`} className='link'>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-sm-4 contact'>
                    <p>Bakı şəh., Üzeyir Hacibeyov, 5/34A</p>
                    <p>
                        <span>Tel:</span>
                        <span>
                            <p>+994 55 6666600</p>
                            <p>+994 55 6666600</p>
                        </span>
                    </p>
                    <p>
                        <span>Mail:</span>
                        <span>info@aurum.com</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer