import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div>
        <h3>{blog.title}</h3>
        <div>{blog.content}</div>
    </div>
  )
}

export default BlogCard