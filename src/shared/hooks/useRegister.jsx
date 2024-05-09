import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { register as registerRequest } from '../../services/api';

import toast from 'react-hot-toast';

export const useRegister = () => {
    
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const register = async (name, username, password, email) => {
        
        setIsLoading(true);

        const response = await registerRequest({

            name,
            email,
            password,
            username

        });

        setIsLoading(false)

        if (response.error) {
            
            console.log(response.error)
            console.log(response.e)
            console.log(response.e?.response?. data);
            
            return toast.error(response.e?.response?.data || 'An error ocurred when you try to regist, please try again');

        }

        const { userDetails } = response.data
        
        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/auth')

    }

    return {
        register,
        isLoading
    }

}
