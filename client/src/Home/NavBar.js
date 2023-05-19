import React from "react";
// import {useState} from "react";
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {

    return (

            <div >
                



                    <div className="login">
                        <Link to="/" className="navlink">Home</Link>
                        <Link to="/signup" className="navlink">Signup</Link>
                        <Link to="/login" className="navlink">Login</Link>    
                    </div>   
                    <div className="nav">
                        <Link to="/" className="navlink">Home</Link>
                        <NavLink to="/add-ingredient" className="navlink">Add Ingredient</NavLink>
                        <NavLink to="/create-cocktail" className="navlink">Create Cocktail</NavLink>  
                        {/* <button className="navlink">Logout</button> */}
                    </div>
                    

                    
                
            </div>
    )
}

export default NavBar;