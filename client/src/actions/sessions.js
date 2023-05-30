const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

// export const postLogin = user => {
//     return (dispatch) => {
//         fetch("http://localhost:3001/login", {
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify(user)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log("ingPostLogin!")
//             console.log(data)
//         })
//         .then(data => dispatch({type: "POST_LOGIN", payload: data}))
//         // dispatch({type: "POST_LOGIN", payload: {username: "CocktailGuy", id: 1, img_url: "www.bomb.com"}})
//     }
// }
export const postLogin = user => {
    return (dispatch) => {
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log("ingPostLogin!")
        console.log(data)
        dispatch({type: "POST_LOGIN", payload: data})
      })
      .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error("Error during login:", error)
      })
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
          headers: headers,
          })
      .then(res => res.json())
      .then(data => {
        console.log("LOADING UPSER!!!")
        console.log(data)
        dispatch({type: "LOAD_USER", payload: data})
      })
      .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error("Error during user load:", error)
      })
    }
  }

export const postSignup = (user) => {
    return (dispatch) => {
        fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => dispatch({type: "POST_SIGNUP", payload: data}))
    .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error("Error during signup post:", error)
      })
}
}


// export const loadUser = () => {
//     // return (dispatch) => {
//     //     fetch("http://localhost:3001/me", {
//     //         headers: headers
//     //     })
//     //     .then(res => res.json())
//     //     .then(data => dispatch({type: "LOAD_USER", payload: data}))
//     // }
//     return (dispatch) => {
//         dispatch({username: "123", id: 1, img_url: "www.bomb.com"})
//     }
// }


