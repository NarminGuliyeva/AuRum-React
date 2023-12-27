import React, { useState } from 'react'
import '../css/career.css'
import careerData from '../Data/Career'
import Layout from '../Components/Layout'
import Career from '../Components/Career'
import Apply from '../Components/Apply'

function Karyera() {
  const [expandedCareerId, setExpandedCareerId] = useState(null);

  const handleCareerClick = (id) => {
    setExpandedCareerId((prevId) => (prevId === id ? null : id));
  };
  return (
    <Layout>
      <section className='career-section bg-section'>
        <div className='contain'>
          <h2 id='titlePage'>Karyera</h2>
          <div className='row'>
            {
              careerData.map(item => {
                return <Career career={item} key={item.id} isExpanded={item.id === expandedCareerId}
                  onClick={() => handleCareerClick(item.id)} />
              })
            }
          </div>
        </div>
        <Apply />
      </section>
    </Layout>
  )
}

export default Karyera