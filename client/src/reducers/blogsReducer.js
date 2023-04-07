// const initialState = {blogsLoading: true, blogs: []}
const initialState = [{
    title: "TITLEEE",
    content: "Here is the content of the blog post"
}]

const blogsReducer = (state = initialState, action) => {
    switch(action.type) {
        // case "ADD_BLOG":
        //     return[...state, action.payload]
        default:
            return state;
    }
}

//actions: {type: "LOAD_BLOGS" , playload: }
//actions: {type: "BLOGS_LOADED" , playload: }

export default blogsReducer;