import {combineReducers} from "redux"
import blogsReducer from "./blogsReducer"
import sessionsReducer from "./sessionsReducer"

export default combineReducers({
    sessionsReducer: sessionsReducer,
    blogsReducer: blogsReducer
})