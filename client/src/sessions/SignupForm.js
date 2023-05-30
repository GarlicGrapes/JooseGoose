import React from "react";
import {useState} from "react";
import { useDispatch } from 'react-redux'
import { postSignup } from "../actions/sessions"
import { useHistory } from "react-router-dom";


function SignupForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    function handleSignupSubmit(e) {
        e.preventDefault()
        const user = {username: username, password: password}
        dispatch(postSignup(user))
        history.push('/')
    }

    return(
        <div>
        <form onSubmit={handleSignupSubmit}>

        <label>Username</label>

        <input 
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <br/>

        <label>Password</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <br/>

        <button type="submit">Sign Up</button>

        <div className="errors list">
            {/* {errors.map((error) => (
                <div key={error}>{error}</div>
            ))} */}
        </div>
        </form>
        </div>

    )
}

export default SignupForm;