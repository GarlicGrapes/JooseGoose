const initialState = {
    // currentUser: {username: "CocktailGuy", id: 1},
    currentUser: {},
    loggedIn: false
}

const sessionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOAD_USER": 
            return{
                ...state,
                currentUser: action.payload,
                loggedIn: true
        }
        case "POST_LOGIN":
            console.log("LOGGING IN!")
            console.log(action.payload)
            return{
                ...state,
                currentUser: action.payload,
                loggedIn: true
        }
        case "POST_SIGNUP":
            return{
                ...state, 
                currentUser: action.payload,
                loggedIn: true
        }
        case "LOGOUT":
            console.log("you have logged out")
            return {
                ...state,
                currentUser: {},
                loggedIn: false
            }
        default:
            return state;

    }
}

export default sessionsReducer;