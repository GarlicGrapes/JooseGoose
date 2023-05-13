import {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import { loadBlogs } from "./actions/blogs";
import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(loadBlogs)
  // },[dispatch])

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
    .then(res => res.json())
    .then(data => dispatch({type:"LOAD_BLOGS", payload: data}))
  })

  return (
    <div className="App">

      <BlogList/>
      <BlogForm/>
    </div>
  );
}

export default App;