import React from 'react'

export default function Header(props) {
  return (
    <header>
      <div>{props['header["data"]["logo"]'] || ''}</div>
      <div>
        {props['header["data"]["links"]']?.split(',') || [].map(x => <a>{x}</a>)}
      </div>
    </header>
  )
}
