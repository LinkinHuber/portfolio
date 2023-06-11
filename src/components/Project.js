import React from 'react'


function Project({ name, image }) {
  return (
    <div className='project'>
      <div style={{backgroundImage: `url(${image})`}} className='backgroundImage' />
      <h1 className='name'> {name} </h1>
    </div>
  )
}

export default Project;
