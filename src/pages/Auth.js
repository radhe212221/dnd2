import React, { useState } from 'react'
import { loginService, signupService } from '../services'
export default function Auth() {
  const [ob1, setob1] = useState({
    email: "", password: ""
  })

  const [ob2, setob2] = useState({
    email: "", password: "", name: ""
  })

  const handleChange1 = e => {
    let { name, value } = e.target
    setob1({ ...ob1, [name]: value })
  }

  const handleChange2 = e => {
    let { name, value } = e.target
    setob2({ ...ob2, [name]: value })
  }

  const login = () => {
    loginService(ob1)
      .then(d => console.log(d))
      .catch(e => console.log(e))
  }

  const signup = () => {
    signupService(ob2)
      .then(d => console.log(d))
      .catch(e => console.log(e))

  }


  return (
    <div className='auth'>
      <h1>login</h1>
      <input value={ob1.email} onChange={handleChange1} placeholder='email' name="email" />
      <input value={ob1.password} onChange={handleChange1} placeholder='password' name="password" />
      <button onClick={login}>login</button>
      <h1>signup</h1>

      <input value={ob2.name} onChange={handleChange2} placeholder='name' name="name" />
      <input value={ob2.email} onChange={handleChange2} placeholder='email' name="email" />
      <input value={ob2.password} onChange={handleChange2} placeholder='password' name="password" />
      <button onClick={signup}>signup</button>
    </div>
  )
}
