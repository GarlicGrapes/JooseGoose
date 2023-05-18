import React from 'react'
import IngredientCard from './IngredientCard'
import {useSelector} from 'react-redux'


const IngredientList = () => {

    //grab blogs from redux store
    // const {loggedIn, currentUser} = useSelector(store => store.sessionsReducer)
    const ingredients = useSelector((store) => store.ingredientsReducer.ingredients)
    console.log(useSelector(store => store.ingredientsReducer))
  
    const ingredientCards = ingredients.map((ingredient, idx) => <IngredientCard key={idx} ingredient={ingredient}/>)


  return (
    <>
    <div>{ingredientCards}</div>
    </>
  )
}

export default IngredientList