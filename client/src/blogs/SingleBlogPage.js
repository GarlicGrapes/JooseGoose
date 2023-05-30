import React from 'react'
import {deleteBlog, editBlogMode} from "../actions/blogs"
import { useDispatch } from 'react-redux'
import BlogCard from './BlogCard'

const SingleBlogPage = () => {

  const dispatch = useDispatch()
  const user = {username: "CocktailGuy", id: 1}



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