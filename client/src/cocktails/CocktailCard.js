import React from 'react'
import CocktailIngredientCard from './CocktailIngredientCard'
import {Link, NavLink} from "react-router-dom"
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

    const ingredientsList = cocktail.cocktail_ingredients.map((cocktailIngredient) => <CocktailIngredientCard cocktailIngredient={cocktailIngredient}/>)

  return (
    <div className='cocktailCard'>
        <Link to={`/cocktails/${cocktail.id}`} className="navlink">{cocktail.title}</Link>  
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