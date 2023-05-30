import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIngredient } from '../actions/ingredients'

const IngredientForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [user, setUser] = useState({})

  const dispatch = useDispatch()
//   const { editMode, editedBlog } = useSelector(store => store.blogsReducer)
  // setUser(useSelector((store) => store.sessionsReducer.currentUser))

    // useEffect(() => {
    //   fetch('http://localhost:3001/me', {
    //       "Accept": "application/json",
    //       "Content-type": "application/json"
    // })        .then(res => res.json())
    // .then(res => setUser(res))
    // .then(console.log(user))
    // },[])

  
  const handleSubmit = e => {
    e.preventDefault()
    const ingredient = {name, description, imgUrl}
    dispatch(addIngredient(ingredient))
    setName("")
    setDescription("")
    setImgUrl("")
  }



  return (
    <div>

      <h3>Add to our Ingredient Library</h3>


      <form onSubmit={handleSubmit}>
        
        <>
        <label htmlFor="name">Name: </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
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