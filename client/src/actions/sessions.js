const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

export const postLogin = user => {
    return (dispatch) => {
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => dispatch({type: "POST_LOGIN", payload: data}))
    }
}

export const logout = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/logout", {
            method: "DELETE",
            headers: headers
        })
        // .then(res => res.json())
        // .then(data => dispatch({type: "LOGOUT", payload: data}))
    }
}

export const loadUser = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/me", {
            headers: headers
        })
        .then(res => res.json())
        .then(data => dispatch({type: "LOAD_USER", payload: data}))
    }
}


