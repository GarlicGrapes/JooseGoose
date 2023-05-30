import React from "react"

const HomePage = () => {
    return (
        <> 
        
        {user? `Welcome, ${user.username}` : "Welcome! Please Log in!"}

        </>
    )
}

export default HomePage