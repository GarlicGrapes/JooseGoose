import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, updateBlog } from '../actions/blogs'

const BlogForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [id, setId] = useState(null)

  const dispatch = useDispatch()
  const { editMode, editedBlog } = useSelector(store => store.blogsReducer)

  useEffect(() => {
    if(editMode) {
      setTitle(editedBlog.title)
      setContent(editedBlog.content)
      setId(editedBlog.id)
    }
  }, [editMode])
  
  
  const handleSubmit = e => {
    e.preventDefault()
    const blog = {title, content}
    dispatch(editMode ? updateBlog(blog) : addBlog(blog))
    setTitle("")
    setContent("")
  }



  return (
    <div>
      <h3>{editMode ? "Edit" : "New"} Blog</h3>
      <form onSubmit={handleSubmit}>
        
        <>
        <label htmlFor="title">Title: </label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
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

export default BlogForm