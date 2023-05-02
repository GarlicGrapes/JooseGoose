const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

export const loadBlogs = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/blogs")
        .then(res => res.json())
        .then(data => dispatch({type: "LOAD_BLOGS", payload: data}))
        .then(data => console.log(data))
    }
}

export const addBlog = blog => {
    return (dispatch) => {
        fetch("http://localhost:3001/blogs", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ blog })
        })
        .then(res => res.json())
        .then(data => dispatch({type: "ADD_BLOG", payload: data}))
        .then(data => console.log(data))
    }
    // return {
    //     type: "ADD_BLOG",
    //     payload: blog
    // } //action to dispatch
}

export const deleteBlog = blog => {
    return (dispatch) => {
        fetch(`http://localhost:3001/blogs/${blog.id}`, {
            method: "DELETE",
            headers: headers,
        })
        .then(res => res.json())
        .then(data => dispatch({type: "DELETE_BLOG", payload: data}))
    }
}

export const editBlogMode = blog => {
    return (dispatch) => {
        fetch(`http://localhost:3001/blogs/${blog.id}`, {
            method: "PATCH",
            headers: headers,
        })
        .then(res => res.json())
        .then(data => dispatch({type: "EDIT_BLOG_MODE", payload: data}))
    }
}

export const updateBlog = blog => {
    return {
        type: "UPDATE_BLOG",
        payload: blog
    }
}