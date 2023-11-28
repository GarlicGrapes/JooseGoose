import React from "react"

const HomePage = () => {
    return (
        <> 
        {console.log(user)}
        {user? `Welcome, ${user.username}` : "Welcome! Please Log in!"}

        </>
    )
}

export default HomePage