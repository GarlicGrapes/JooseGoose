import {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { loadBlogs } from "./actions/blogs";
import { loadUser } from "./actions/sessions"
import { loadIngredients } from "./actions/ingredients";
import { loadCocktails } from "./actions/cocktails";
import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";
import LoginForm from "./sessions/loginForm";
import CocktailList from "./cocktails/CocktailList";
import IngredientForm from "./ingredients/IngredientForm";
import IngredientList from "./ingredients/IngredientList";
import NavBar from "./Home/NavBar";
import HomePage from "./Home/NavBar";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBlogs())
    dispatch(loadIngredients())
    dispatch(loadUser())
    dispatch(loadCocktails())
  },[dispatch])

  // const user = useSelector((store) => store.sessionsReducer.currentUser)



  

  return (
    <div className="App">
      
      <img className="HomeLogo" src="https://i.imgur.com/7eKOvAH.png" alt="Joose Goose Logo"/>
      <NavBar/>
        {/* WELCOME, {user.username}! */}
        <Switch>
            <Route exact path="/">
              {/* <HomePage/> */}
              <BlogList/>
            </Route>

            <Route exact path="/browse-cocktails">
              <CocktailList/>
            </Route>

            <Route exact path="/add-ingredient">
              <IngredientForm/>
              <IngredientList/> 
            </Route>

            <Route exact path="/create-blog">
              <BlogForm/>
            </Route>

            <Route exact path="/login">
              <LoginForm/>
            </Route>

        </Switch>

    </div>
  );
}

export default App;