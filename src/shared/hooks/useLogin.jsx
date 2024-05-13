import { useNavigate } from "react-router-dom";
import { login as loginRequest } from '../../services'
import toast from "react-hot-toast";

export const useLogin = () => {

    const navigate = useNavigate()

    const login = async(usernameOrEmail, password) =>{

        const response = await loginRequest({
            usernameOrEmail,
            password
        })

        if(response.error){
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'An error ocurred while logging in, please try again')
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }
    return{
        login
    }
}