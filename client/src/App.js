import {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import { loadBlogs } from "./actions/blogs";
import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBlogs)
    console.log(dispatch(loadBlogs))
    console.log(loadBlogs)
  },[])

  return (
    <div className="App">

      <BlogList/>
      <BlogForm/>
    </div>
  );
}

export default App;