import React from 'react'

export default function About(props) {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>
        {props['about["data"]']}
      </p>

      <button>learn more</button>
    </div>
  )
}
