const initialState = {
    ingredients: []
}

const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOAD_INGREDIENTS":
            return {
                ...state, 
                ingredients: action.payload
            }
        case "ADD_INGREDIENT":
            return { 
                ...state, 
                ingredients: [...state.ingredients, {...action.payload}]
            }
        case "DELETE_INGREDIENT":
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default ingredientsReducer;