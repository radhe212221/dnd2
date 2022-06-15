import React from 'react'

export default function Header({ data }) {
  return (
    <header>
      <div>{data?.logo || ''}</div>
      <div>
        {data?.links?.map(x => <a>{x}</a>)}
      </div>
    </header>
  )
}
