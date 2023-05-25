import React from 'react'
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

  return (
    <div>
        <h3>{cocktail.title}</h3>
        <img src={cocktail.img_url} alt={cocktail.title}></img>
        {/* <button onClick={handleDelete}>Delete Post</button>
        <button onClick={handleEdit}>Edit Post</button> */}
    </div>
  )
}

export default CocktailCard;