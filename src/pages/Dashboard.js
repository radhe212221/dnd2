import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
    return (
        <div>
            <h1>welcome name </h1>
            <Link to="/edit">edit</Link>
            <Link to="/preview">visit site</Link>
            <button>logout</button>
        </div>
    )
}
