export const validateUsernameOrEmail = (usernameOrEmail) => {

    if(usernameOrEmail.includes('@')){

        const regex = /\S+@\S+\.\S+/

        return regex.test(usernameOrEmail)

    }else{

        const regex = /^\S{3,8}$/

        return regex.test(usernameOrEmail)

    }

}

export const validateUsernameOrEmailMessage = 'The username does not meet the necessary requirements (Username: 3 to 8 characters without spaces |Email: A email direction) '