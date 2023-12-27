import React from 'react'
import { Link} from 'react-router-dom'

function Ships({shipsData}) {
    return (
        <div className='col-sm-6 ship-card'>
            <Link to={`/ships/${encodeURIComponent(shipsData.name.toLocaleLowerCase())}`} state={{ships : shipsData}}  >
                <div className='img-border img-ship'>
                    <img src={`/img/${shipsData.img}`}></img>
                    <div className='name-ship'>
                        <h2 className='heading2'>{shipsData.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Ships