import React from "react"
import { useDispatch, useSelector } from "react-redux"

const CocktailPage = () => {
    const user = {username : "CocktailGuy", id : 1}
    const cocktail = useSelector((store) => store.cocktailsReducer.currentCocktail)



return(


    <div>
        COCKTAIL PAGE
    </div>
)




}

export default CocktailPage