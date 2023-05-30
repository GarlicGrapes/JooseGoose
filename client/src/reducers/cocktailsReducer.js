const initialState = {
    cocktails : [],
    currentCocktail: {}
}

const cocktailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOAD_COCKTAILS":
            console.log(action.payload)
            return {
                ...state, 
                cocktails: action.payload
            }
        case "SHOW_COCKTAIL": 
            return {
                ...state,
                currentCocktail: action.payload
            }
        default:
            return state;
    }
}


export default cocktailsReducer;