import React from 'react'
import BlogCard from './BlogCard'
import {useSelector} from 'react-redux'


const BlogList = () => {

    //grab blogs from redux store
    // const {loggedIn, currentUser} = useSelector(store => store.sessionsReducer)
    const blogs = useSelector((store) => store.blogsReducer.blogs)
    
    const blogCards = blogs.map((blog, idx) => <BlogCard key={idx} blog={blog}/>)

  return (
    <div>{blogCards}</div>
  )
}

export default BlogList