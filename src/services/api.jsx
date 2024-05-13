import axios from "axios";

const apiClient = axios.create({

    baseURL: 'http://192.168.31.103:3002/personal-blog/v1',
    timeout: 1000
    
})

apiClient.interceptors.request.use(

    (config) => {
        
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`

        }

        return config

    },

    (e) => {

        return Promise.reject(e)

    }

)

export const login = async(data) => {
    
    try {
        
        return await apiClient.post('auth/login', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}

export const register = async (data) => {
    
    try {
        
        return await apiClient.post('/auth/register', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}

export const listPost = async (data) => {
    
    try {
        
        return await apiClient.get('/post', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}

export const listComment = async (data) => {
    
    try {
        
        return await apiClient.get('/comment', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}

export const addComment = async (data) => {
    
    try {
        
        return await apiClient.post('/comment', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}