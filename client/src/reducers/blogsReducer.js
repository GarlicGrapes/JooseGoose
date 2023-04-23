// const initialState = {blogsLoading: true, blogs: []}
const initialState = {
    blogsLoading: true,
    blogs: [
    {title: "TITLEEE",
    content: "Here is the content of the blog post"},
    {title: "Post 2",
    content: "Here is the content of the blog post 2"}
    ]
}

const blogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_BLOG":
            return { 
                ...state, 
                blogs: [...state.blogs, action.payload] 
            }
        default:
            return state;
    }
}

//actions: {type: "LOAD_BLOGS" , playload: }
//actions: {type: "BLOGS_LOADED" , playload: }

export default blogsReducer;