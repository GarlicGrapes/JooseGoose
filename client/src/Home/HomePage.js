import React from "react"
const user = {username: "123", id: 1, img_url: "bomb.com"}
const HomePage = () => {
    return (
        <> 
        
        {user? `Welcome, ${user.username}` : "Welcome! Please Log in!"}

        </>
    )
}

export default HomePage