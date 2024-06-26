import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { register as registerRequest } from '../../services/api';

import toast from 'react-hot-toast';

export const useRegister = () => {
    
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const register = async (name, username, password, email) => {
        
        setIsLoading(true);

        console.log(name);
        console.log(username);
        console.log(password);
        console.log(email);

        const response = await registerRequest({

            name,
            username,
            password,
            email

        });

        setIsLoading(false);

        if (response.error) {
            
            console.log(response.error)
            console.log(response.e)
            console.log(response.e?.response?. data);
            
            return toast.error(response.e?.response?.data || 'An error ocurred when you try to regist, please try again');

        }

        navigate('/')

    }

    return {
        register,
        isLoading
    }

}
