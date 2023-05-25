import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CocktailForm = () => {
  const [name, setName] = useState("")
//   const [content, setContent] = useState("")
//   const [id, setId] = useState(null)

//   const dispatch = useDispatch()
//   const { editMode, editedBlog } = useSelector(store => store.blogsReducer)

//   useEffect(() => {
//     if(editMode) {
//       setTitle(editedBlog.title)
//       setContent(editedBlog.content)
//       setId(editedBlog.id)
//     }
//   }, [editMode])
  
  
//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log(e)
//     const blog = {title, content, id}
//     console.log (blog)
//     dispatch(editMode ? updateBlog(blog) : addBlog(blog))
//     setTitle("")
//     setContent("")
//   }



  return (
    <div>
      <h3>New Cocktail</h3>
      <form onSubmit={handleSubmit}>
        
        <>
        <label htmlFor="name">Name: </label>
        <input type="text" value={title} onChange={e => setName(e.target.value)}/>
        </>
        
        <>
        <label htmlFor="content"></label>
        <textarea id="content" value={content} onChange={e => setContent(e.target.value)} />
        </>

        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default CocktailForm