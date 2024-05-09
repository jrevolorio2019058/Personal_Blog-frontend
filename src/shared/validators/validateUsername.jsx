export const validateUsername = (username) => {
    
    const regex = /^\S{3,8}$/

    return regex.text(username)

}

export const validateUsernameMessage = 'The username needs 3 to 8 characters without space'