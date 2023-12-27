import React from 'react'
import '../css/ships.css'
import Layout from '../Components/Layout'
import ShipDetails from '../Components/ShipDetails'
import Ships from '../Components/Ships'
import shipsData from '../Data/Ships'

function Gemi() {
  return (
    <Layout>
      <ShipDetails />
      <section className='ships-section bg-section' id='shipDetails'>
        <div className='contain'>
          <div className='row ships-container'>
            {
              shipsData.map(item => (
                <Ships key={item.id} shipsData={item} />
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gemi