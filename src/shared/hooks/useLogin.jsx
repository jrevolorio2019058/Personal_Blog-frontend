import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from '../../services'
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async(usernameOrEmail, password) =>{
        setIsLoading(true)

        const response = await loginRequest({
            usernameOrEmail,
            password
        })
        console.log(response)
        setIsLoading(false)

        if(response.error){
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'An error ocurred while logging in, please try again')
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }
    return{
        login,
        isLoading
    }
}