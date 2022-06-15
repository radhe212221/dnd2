import React from 'react'

export default function Team() {
  const a = [
    { h2: "demo1", h3: "frontend", h4: "html5", a: "#" },
    { h2: "demo2", h3: "frontend", h4: "html5", a: "#" },
    { h2: "demo3", h3: "frontend", h4: "html5", a: "#" },
    { h2: "demo4", h3: "frontend", h4: "html5", a: "#" },
  ]
  return (
    <div className='team'>
      <h1>Meet the team</h1>
      <p>we re group industry experts</p>
      <div className='flex'>
        {a.map(x => <div className='item'>
          <h2>{x.h2}</h2>
          <h3>{x.h3}</h3>
          <h4>{x.h4}</h4>
          <a href={x.a}>connect now</a>
        </div>)}
      </div>
    </div>
  )
}