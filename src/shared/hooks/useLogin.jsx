import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from '../../services';

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

        console.log(response.data);

        /*recordatorio: el userDetails si en el backEnd se necesita desestructurar por llaves si viene solo
        como un objeto llamar al objteto normal*/

        const  userDetails  = response.data

        console.log(userDetails);

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }
    return{
        login
    }
}