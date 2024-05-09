export const validateName = (name) => {
    
    const regex = /^\S{3,6}$/

    return regex.test(name)

}

export const validateNameMessage = 'The name needs 3 to 8 characters without space'