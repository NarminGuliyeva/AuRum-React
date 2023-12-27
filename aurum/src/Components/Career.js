import React from 'react'

function Career({ career, isExpanded, onClick }) {

  const divStyle = {
    // height: isExpanded? '100%' : '80px', 
  };

  const buttonStyle = {
    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 0.5s ease'
  };
  const infoStyle = {
    display: isExpanded ? 'block' : 'none',
    transition: 'transform 0.5s ease-in-out'
  };

  return (
    <div className='career' style={divStyle}>
      <div className='main'>
        <h2 className='heading2'>{career.title}</h2>
        <button className='btn-down' onClick={onClick} style={buttonStyle}><i class="fa-solid fa-angle-right"></i></button>
        <div className='location-date'>
          <span><i class="fa-solid fa-location-dot"></i> {career.location}</span>
          <span><i class="fa-solid fa-calendar-days"></i> {career.date}</span>
        </div>
      </div>
      <div className='info-career' style={infoStyle}>
        <p>{career.info} Öhdəliklər:</p>
        <ul className='work-info'>
          <li>{career.responsibilities}</li>
          <li>{career.responsibilities}</li>
          <li>{career.responsibilities}</li>
          <li>{career.responsibilities}</li>
        </ul>
        <ul className='personal-info'>
          <li><b>Cinsi:</b>  {career.gender}</li>
          <li><b>Yaş:</b>  {career.age}</li>
          <li><b>Dil bilikləri:</b>  {career.language}</li>
          <li><b>İş təcrübəsi:</b>  {career.experience} il</li>
          <li><b>İş qrafiki:</b>  {career.graphic}</li>
          <li><b>Əmək haqqı:</b>  {career.salary}</li>
          <li><b>Son müraciət:</b>  {career.apply}</li>
        </ul>
        <button className='btn btn-apply'>Müraciət et</button>
      </div>
    </div>
  )
}

export default Career