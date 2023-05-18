import {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import { loadBlogs } from "./actions/blogs";
import { loadIngredients } from "./actions/ingredients";
import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";
import LoginForm from "./sessions/loginForm";
import IngredientForm from "./ingredients/IngredientForm";
import IngredientList from "./ingredients/IngredientList";

function App() {
  const dispatch = useDispatch()
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    dispatch(loadBlogs())
    dispatch(loadIngredients())
  },[dispatch])



  useEffect(() => {
    fetch("http://localhost:3001/ingredients")
    .then(res => res.json())
    .then(data => dispatch({type:"LOAD_INGREDIENTS", payload: data}))
    .then(data => setIngredients(data))
    .then(console.log(ingredients))
  }, [])

  return (
    <div className="App">

      <BlogList/>
      {/* <BlogForm/> */}
      {/* <LoginForm/> */}
      <IngredientForm/>
      <IngredientList/>
    </div>
  );
}

export default App;