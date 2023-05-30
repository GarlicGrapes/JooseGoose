import React from 'react'
import {deleteBlog, editBlogMode} from "../actions/blogs"
import { useDispatch, useSelector } from "react-redux"
import BlogCard from './BlogCard'

const SingleBlogPage = () => {

  const dispatch = useDispatch()
  const user = useSelector((store) => store.sessionsReducer.currentUser)
//   const blog = useSelector((store) => store.blogsReducer.


  const handleDelete = () => {
    dispatch(deleteBlog(blog))
  }

  const handleEdit = () => {
    dispatch(editBlogMode(blog))
  }

  return (
    <div>
        {user ? <BlogCard/> : <BlogCard/>}
        <h3>{blog.title}</h3>
        <div>{blog.content}</div>
        <button onClick={handleDelete}>Delete Post</button>
        <button onClick={handleEdit}>Edit Post</button>
    </div>
  )
}

export default BlogCard