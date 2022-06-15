import React from 'react'

export default function Services({ data }) {
  // const a = ["html", 'css', "js", "react", "angulkar", "redux", "api", "frontned", "backend"]
  return (
    <div className='services'>
      <h1>our services</h1>
      <p>we provide all it services</p>
      <div className='flex'>
        {data?.map((x, i) => <div className='item'>
          <h3>service {i + 1}</h3>
          <p>some desc about {x}</p>
          <code>more on this found on www.{x}.com</code>
          <button>learn more</button>
        </div>)}
      </div>
    </div>
  )
}
