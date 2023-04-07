import React from 'react'
import BlogCard from './BlogCard'
import {useSelector} from 'react-redux'


const BlogList = () => {

    //grab blogs from redux store
    const blogs = useSelector((store) => store)

    const blogCards = blogs.map((blog, idx) => <BlogCard key={idx} blog={blog}/>)

  return (
    <div>{blogCards}</div>
  )
}

export default BlogList