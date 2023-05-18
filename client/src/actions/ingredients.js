const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

export const loadIngredients = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/ingredients")
        .then(res => res.json())
        .then(data => dispatch({type: "LOAD_INGREDIENTS", payload: data}))
        .then(data => console.log(data))
    }
}

export const addIngredient = ingredient => {
    return (dispatch) => {
        fetch("http://localhost:3001/ingredients", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ ingredient })
        })
        .then(res => res.json())
        .then(data => dispatch({type: "ADD_INGREDIENT", payload: data}))
        .then(data => console.log(data))
    }
}