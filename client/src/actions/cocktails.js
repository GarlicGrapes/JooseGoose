const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

export const loadCocktails = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/cocktails")
        .then(res => res.json())
        .then(data => dispatch({type: "LOAD_COCKTAILS", payload: data}))
    }
}

export const showCocktail = (cocktailId) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/cocktails/${cocktailId}`)
        .then(res => res.json())
        .then(data => dispatch({type: "SHOW_COCKTAIL", payload: data}))
    }
}

// export const addBlog = blog => {
//     return (dispatch) => {
//         fetch("http://localhost:3001/blogs", {
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify({ blog })
//         })
//         .then(res => res.json())
//         .then(data => dispatch({type: "ADD_BLOG", payload: data}))
//         .then(data => console.log(data))
//     }
// }

// export const deleteBlog = blog => {
//     return (dispatch) => {
//         fetch(`http://localhost:3001/blogs/${blog.id}`, {
//             method: "DELETE",
//             headers: headers
//           })
//         .then(res => res.json())
//         .then(data => dispatch({type: "DELETE_BLOG", payload: blog}))
//     }
//   }

// export const editBlogMode = blog => {
// return {
//     type: "EDIT_BLOG_MODE",
//     payload: blog
//   }
// }

// export const updateBlog = blog => {
//     console.log(blog)
//     return (dispatch) => {
//         fetch(`http://localhost:3001/blogs/${blog.id}`, {
//             method: "PATCH",
//             headers: headers,
//             body: JSON.stringify(blog)
//         })
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: "UPDATE_BLOG",
//             payload: data
//           }))
//     }
// }