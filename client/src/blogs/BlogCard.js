import React from 'react'
import {deleteBlog, editBlogMode} from "../actions/blogs"
import { useDispatch } from 'react-redux'

const BlogCard = ({blog}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteBlog(blog))
  }

  const handleEdit = () => {
    dispatch(editBlogMode(blog))
  }

  return (
    <div>
        <h3>{blog.title}</h3>
        <div>{blog.content}</div>
        <button onClick={handleDelete}>Delete Post</button>
        <button onClick={handleEdit}>Edit Post</button>
    </div>
  )
}

export default BlogCard