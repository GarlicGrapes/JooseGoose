const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

export const postLogin = user => {
    return (dispatch) => {
        console.log(user)
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

export const logout = user => {
    return (dispatch) => {
        fetch("http://localhost:3001/logout", {
            method: "DELETE",
            headers: headers
        })
        // .then(res => res.json())
        // .then(data => dispatch({type: "LOGOUT", payload: user}))
    }
}