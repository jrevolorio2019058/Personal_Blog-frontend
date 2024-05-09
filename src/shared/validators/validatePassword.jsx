export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[1-9])(?=.*[!$%#])\S{6,12}$/

    return regex.test(password)
}

export const validatePasswordMessage = 'One of the necessary parameters is missing: A capital letter, a number from 1-9, a special character, minium 6 characters'