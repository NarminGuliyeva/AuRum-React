import React from 'react'
import titlesData from '../Data/Titles'

function Title({index}) {
    return (
        <>
            <div className='title'>
                <h3>{titlesData[index]}</h3>
                <h2 className='heading'>{titlesData[index]}</h2>
                <img src='/img/Frame 1.png'></img>
            </div>
        </>
    )
}

export default Title