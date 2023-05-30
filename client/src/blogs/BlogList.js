import React from 'react'
import BlogCard from './BlogCard'
import {useSelector} from 'react-redux'


const BlogList = () => {
    const user = {username: "123", id: 1, img_url: "bomb.com"}
    //grab blogs from redux store
    // const {loggedIn, currentUser} = useSelector(store => store.sessionsReducer)
    const blogs = useSelector((store) => store.blogsReducer.blogs)

    const blogCards = blogs.map((blog, idx) => <BlogCard key={idx} blog={blog}/>)

  return (
    <div>
      <div>
        {user? `Welcome, ${user.username}!` : "Welcome! Please Log in <3"}
      </div>
    {blogCards}
    </div>
  )
}

export default BlogList