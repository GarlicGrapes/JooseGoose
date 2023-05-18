const initialState = {
    currentUser: {},
    loggedIn: false
}

const sessionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "POST_LOGIN":
            return{
                ...state,
                currentUser: action.payload,
                loggedIn: true
        }
        case "LOGOUT":
            console.log("you have logged out")
            return state;
            //!!^^INCOMPLETE FOR TESTING
        default:
            return state;

    }
}

export default sessionsReducer;