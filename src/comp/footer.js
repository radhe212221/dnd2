import React from 'react'

export default function Footer({ data }) {
  return (
    <footer>
      {data || "copyrights &copy; company-name &trade; - year"}
    </footer>
  )
}
