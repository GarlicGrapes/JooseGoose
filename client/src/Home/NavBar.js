import React from "react";
// import {useState} from "react";
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {

    return (

            <div >
                



                    <div className="login">
                        <Link to="/login" className="navlink">Login</Link>  
                        <br/>
                        <Link to="/signup" className="navlink">Signup</Link>
                        <br/>
                        <Link to="/create-blog" className="navLink">New Blog</Link>  
                        <br/>
                        <NavLink to="/create-cocktail" className="navlink">Create Cocktail</NavLink>  
                    </div>   
                    <div className="nav">
                        <Link to="/" className="navlink">Home</Link>
                        <NavLink to="/add-ingredient" className="navlink">Add Ingredient</NavLink>
                        <NavLink to="/browse-cocktails" className="navLink">Browse Cocktails</NavLink>
                        {/* <button className="navlink">Logout</button> */}
                    </div>
                    

                    
                
            </div>
    )
}

export default NavBar;