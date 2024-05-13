import { useNavigate } from 'react-router-dom';

import { addComment as addCommentRequest } from '../../services/api';

import toast from 'react-hot-toast';

export const useComment = () => {

    const navigate = useNavigate();

    const addComment = async (creatorComment, titleComment, descriptionComment, postName) => {

        const response = await addCommentRequest({

            creatorComment,
            titleComment,
            descriptionComment,
            postName

        });

        if (response.error) {
            
            console.log(response.error)
            console.log(response.e)
            console.log(response.e?.response?. data);
            
            return toast.error(response.e?.response?.data || 'An error ocurred when you try to regist, please try again');

        }

        navigate('/')

    }

    return {
        addComment
    }

}