import React from 'react'
// import {deleteBlog, editBlogMode} from "../actions/blogs"
// import { useDispatch } from 'react-redux'

const IngredientCard = ({ingredient}) => {
//   const dispatch = useDispatch()

  const handleDelete = () => {
    // dispatch(deleteBlog(blog))
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
        <button onClick={handleDelete}>Delete Post</button>
        {/* <button onClick={handleEdit}>Edit Post</button> */}
    </div>
  )
}

export default IngredientCard