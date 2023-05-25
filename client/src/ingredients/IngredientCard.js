import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteIngredient } from '../actions/ingredients'

const IngredientCard = ({ingredient}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteIngredient(ingredient))
    console.log(`${ingredient.name} deleted`)
  }

//   const handleEdit = () => {
//     console.log(`$`)
//     dispatch(editBlogMode(blog))
//   }

  return (
    <div> 
        <h3>{ingredient.name}</h3>
        <div>{ingredient.description}</div>
        <button onClick={handleDelete}>Delete Ingredient</button>
        {/* <button onClick={handleEdit}>Edit Post</button> */}
    </div>
  )
}

export default IngredientCard