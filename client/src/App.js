import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { loadBlogs } from "./actions/blogs";
import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBlogs)
  },[])

  return (
    <div className="App">
      <BlogList/>
      <BlogForm/>
    </div>
  );
}

export default App;