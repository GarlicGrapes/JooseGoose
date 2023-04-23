import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../actions'

const BlogForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addBlog({title, content}))
  }



  return (
    <div>
      <h3>New Blog</h3>
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