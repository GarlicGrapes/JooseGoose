import React from 'react'

const CocktailIngredientCard = ({cocktailIngredient}) => {

  return (
    <div>
        {cocktailIngredient ? `${cocktailIngredient.quantity} ${cocktailIngredient.unit} : ${cocktailIngredient.ingredient.name}` : "Loading..."}
    </div> 
  )
}

export default CocktailIngredientCard;