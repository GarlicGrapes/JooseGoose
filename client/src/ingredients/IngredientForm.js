import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, updateBlog } from '../actions/blogs'

const IngredientForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")

//   const dispatch = useDispatch()
//   const { editMode, editedBlog } = useSelector(store => store.blogsReducer)


  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
    const ingredient = {name, description, img_url}
    console.log(ingredient)
    setName("")
    setDescription("")
    setImgUrl("")
  }



  return (
    <div>
      <h3>New Ingredient</h3>
      <form onSubmit={handleSubmit}>
        
        <>
        <label htmlFor="name">Name: </label>
        <input type="text" value={title} onChange={e => setName(e.target.value)}/>
        </>

        <>
        <label htmlFor="img_url">Image URL: </label>
        <input type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)}/>
        </>
        
        <>
        <label htmlFor="description"></label>
        <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
        </>
        
        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default IngredientForm;