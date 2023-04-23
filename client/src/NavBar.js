import React from 'react'
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        {/* {user ? (  */}
            <div className="nav">
                <Link to="/" className="navlink">Home</Link>
                <NavLink to="/add-deck" className="navlink">Add Deck</NavLink>
                <NavLink to="/add-card" className="navlink">Add Card</NavLink>  
                <button onClick={handleLogoutClick} className="navlink">Logout</button>
            </div>
                    
            {/* // ) : (
            //             <div className="nav">
            //             <Link to="/" className="navlink">Home</Link>
            //             <Link to="/signup" className="navlink">Signup</Link>
            //             <Link to="/login" className="navlink">Login</Link>    
            //             </div>   
                    
            //     )} */}

    </div>
  )
}

export default NavBar