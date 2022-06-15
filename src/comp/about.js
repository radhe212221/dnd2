import React from 'react'

export default function About({data}) {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>
        {data}
      </p>

      <button>learn more</button>
    </div>
  )
}
