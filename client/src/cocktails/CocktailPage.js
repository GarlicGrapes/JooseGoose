import React, {useEffect} from "react"
import CocktailIngredientCard from "./CocktailIngredientCard"
import { useDispatch, useSelector } from "react-redux"
import { showCocktail } from "../actions/cocktails"

import {useParams} from "react-router-dom"


const CocktailPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(showCocktail(id))
    }, [dispatch])

    const cocktail = useSelector((store) => store.cocktailsReducer.currentCocktail)
    // const ingredientsList = cocktail.cocktail_ingredients.map((ingredient) => <CocktailIngredientCard ingredient={ingredient}/>)




    // const ingredientsList = cocktail.cocktail_ingredients.map((ingredient) => {
    //     <CocktailIngredientCard ingredient={ingredient.ingredient}/>
    // })
    // console.log("COCKTAILPAGE")
    // console.log(ingredientsList)

return(

    
    <div className="cocktailPage">
        
        {cocktail ? (
            <div>
            <img src={cocktail.img_url} alt={cocktail.title} width={500}></img>
            <h1>{cocktail.title}</h1>
            {cocktail.cocktail_ingredients.map((cocktailIngredient) => <CocktailIngredientCard cocktailIngredient={cocktailIngredient}/>)}
            <br/>
            <div className="cocktailInstructions">
                {cocktail.instructions}
            </div>
            </div>
        )   : (
            "loading..."
            )}
    
        
    </div>
)




}

export default CocktailPage