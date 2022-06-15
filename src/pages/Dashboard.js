import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
export default function Dashboard() {
    const navigate = useNavigate()
    const state = useSelector(s => s)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch({ type: "logout" })
        localStorage.removeItem("user")
        navigate("/")
    }
    return (
        <div>
            <h1>welcome {state?.user?.name}</h1>
            <Link to="/edit">edit</Link>
            <Link to="/preview">visit site</Link>
            <button onClick={logout}>logout</button>
        </div>
    )
}
