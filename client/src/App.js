import {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import { loadBlogs } from "./actions/blogs";
import { loadIngredients } from "./actions/ingredients";
import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";
import LoginForm from "./sessions/loginForm";
import IngredientForm from "./ingredients/IngredientForm";
import IngredientList from "./ingredients/IngredientList";
import NavBar from "./Home/NavBar";
import HomePage from "./Home/NavBar";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBlogs())
    dispatch(loadIngredients())
  },[dispatch])

  return (
    <div className="App">
      <NavBar/>

        {/* <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>

        </Switch> */}
      {/* <BlogList/> */}
      {/* <BlogForm/> */}
      {/* <LoginForm/> */}
      {/* <IngredientForm/>
      <IngredientList/> */}
    </div>
  );
}

export default App;