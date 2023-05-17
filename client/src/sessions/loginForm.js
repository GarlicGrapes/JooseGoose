import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postLogin, logout } from '../actions/sessions'

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  
  const handleSubmit = e => {
    e.preventDefault()
    const user = {username, password}
    dispatch(postLogin(user))
  }

  const handleLogout = e => {
    dispatch(logout(e))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <>
        <label htmlFor="Username">Username: </label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </>
        <br/>
        <>
        <label htmlFor="password">Password: </label>
        <input id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </>

        <input type="submit" value="Submit" />

      </form>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default LoginForm