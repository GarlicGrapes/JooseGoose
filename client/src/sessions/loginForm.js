import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postLogin, logout } from '../actions/sessions'

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const user = {username: username, password: password}
  //   dispatch(postLogin(user))
  // }

  // const handleLogout = () => {
  //   dispatch(logout())
  // }

  const handleSubmit = e => {
    e.preventDefault()
    const user = {username, password}
  //   fetch('http://localhost:3001/login', {
  //     "method": "POST",
  //     "Accept": "application/json",
  //     "Content-type": "application/json",
  //     "body" : JSON.stringify(user)
  // })        
  fetch('http://localhost:3001/login', {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify({username: username, password: password})
})
.then(res => res.json())
.then(data => console.log(data))
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
      {/* <button onClick={handleLogout}>Log Out</button> */}
    </div>
  )
}

export default LoginForm