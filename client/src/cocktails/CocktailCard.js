import React from 'react'
import CocktailIngredientCard from './CocktailIngredientCard'
// import {deleteBlog, editBlogMode} from "../actions/blogs"
// import { useDispatch } from 'react-redux'

const CocktailCard = ({cocktail}) => {
//   const dispatch = useDispatch()

//   const handleDelete = () => {
//     dispatch(deleteBlog(blog))
//   }

//   const handleEdit = () => {
//     dispatch(editBlogMode(blog))
//   }
console.log(cocktail)

    const ingredientsList = cocktail.cocktail_ingredients.map((ingredient) => <CocktailIngredientCard cocktailIngredient={ingredient}/>)

  return (
    <div className='cocktailCard'>
        <h3>{cocktail.title}</h3>
        <img src={cocktail.img_url} alt={cocktail.title} width={200}></img>
        {/* <button onClick={handleDelete}>Delete Post</button>
        <button onClick={handleEdit}>Edit Post</button> */}
        <div className='ingredientsList'>
        {ingredientsList}
        </div>

    </div>
  )
}

export default CocktailCard;