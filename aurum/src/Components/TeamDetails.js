import React from 'react'

function TeamDetails({team}) {
  return (
    <div className='team-card col-sm-3'>
      <div className='img-border'>
        <img src={`/img/${team.img}`}></img>
      </div>
      <h4>{team.name}</h4>
      <h3>{team.position}</h3>
    </div>
  )
}

export default TeamDetails