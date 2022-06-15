import React from 'react'

export default function Contact({ data }) {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <p>our team reaches in 24 by 7 support</p>
      {data?.map(x => <input placeholder={x} />)}
      <button>Send Message</button>
    </div>
  )
}
