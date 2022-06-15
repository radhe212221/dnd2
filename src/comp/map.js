import React from 'react'

export default function Map({ data }) {
  return (
    <div className='map'>
      <img src={data || "https://www.w3schools.com/w3images/map.jpg"} />
    </div>
  )
}
