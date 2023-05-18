import {combineReducers} from "redux"
import blogsReducer from "./blogsReducer"
import sessionsReducer from "./sessionsReducer"
import ingredientsReducer from "./ingredientsReducer"

export default combineReducers({
    sessionsReducer: sessionsReducer,
    blogsReducer: blogsReducer,
    ingredientsReducer: ingredientsReducer
})