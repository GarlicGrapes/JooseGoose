// const initialState = {blogsLoading: true, blogs: []}
const initialState = {
    // blogsLoading: true,
    blogs: [],
    editMode: false,
    editedBlog: null
}

const blogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_BLOG":
            return { 
                ...state, 
                blogs: [...state.blogs, {...action.payload}]
            }
        case "DELETE_BLOG":
            console.log(state)
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog.id !== action.payload.id)
            }
        case "EDIT_BLOG_MODE": {
            return {
                ...state,
                editMode: true,
                editedBlog: action.payload
            }
        }
        case "UPDATE_BLOG": {
            const updatedBlogs = state.blogs.map(blog => {
                if(blog.id === action.payload.id) {
                    return action.payload
                } else { 
                    return blog 
                }
            })
            return{
                ...state,
                editMode: false,
                editedBlog: null,
                blogs: updatedBlogs

            }
        }
        default:
            return state;
    }
}

//actions: {type: "LOAD_BLOGS" , playload: }
//actions: {type: "BLOGS_LOADED" , playload: }

export default blogsReducer;