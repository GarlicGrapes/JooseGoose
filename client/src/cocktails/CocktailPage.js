import React from "react"
import IngredientDetailCard from "./CocktailIngredientCard"
import { useDispatch, useSelector } from "react-redux"

const CocktailPage = () => {
    const user = {username : "CocktailGuy", id : 1}
    const cocktail = useSelector((store) => store.cocktailsReducer.currentCocktail)
    const ingredientsList = cocktail.ingredients.map((ingredient) => {
        <IngredientDetailCard ingredient={ingredient}/>
    })
    console.log("COCKTAILPAGE")
    console.log(ingredientsList)

return(


    <div>
        COCKTAIL PAGE
        
    </div>
)




}

export default CocktailPage