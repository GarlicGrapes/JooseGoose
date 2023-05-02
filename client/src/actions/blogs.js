const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

export const loadBlogs = () => {
    return (dispatch) => {
        fetch("localhost:3000/blogs")
        .then(res => res.json())
        .then(data => dispatch({type: "LOAD_BLOGS", payload: data}))
    }
}

export const addBlog = blog => {
    return (dispatch) => {
        fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ blog })
        })
        .then(res => res.json())
        .then(data => dispatch({type: "ADD_BLOG", payload: data}))
    }
    // return {
    //     type: "ADD_BLOG",
    //     payload: blog
    // } //action to dispatch
}

export const deleteBlog = blog => {
    return {
        type: "DELETE_BLOG",
        payload: blog
    }
}

export const editBlogMode = blog => {
    return {
        type: "EDIT_BLOG_MODE",
        payload: blog
    }
}

export const updateBlog = blog => {
    return {
        type: "UPDATE_BLOG",
        payload: blog
    }
}