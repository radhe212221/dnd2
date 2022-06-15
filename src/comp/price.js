import React from 'react'

export default function Price() {
  const a = [
    { name: "basic", price: 200, a: ["f1", "f2", "f3", "f4", "f5"] },
    { name: "pro", price: 300, a: ["f1", "f2", "f3", "f4", "f5"] },
    { name: "premium", price: 800, a: ["f1", "f2", "f3", "f4", "f5"] },
  ]
  return (
    <div className='pricing'>
      <h1>our pricing</h1>
      <p>we provide best in price</p>
      <div className='flex'>
        {a.map(x => <div className='item'>
          <div className='header'>
            <h1>{x.name}</h1>
          </div>
          <div className='body'>
            {x.a.map(y => <li>{y}</li>)}
            <big>${x.price}</big>
          </div>
          <div className='footer'>
            <button>view plan</button>
          </div>
        </div>)}
      </div>
    </div>
  )
}
