import { listPost, listPost as listPostRequest} from "../../services";

import { useEffect } from "react";

import { useState } from "react";

import toast from "react-hot-toast";

export const Post = () => {

    const [post, setPost] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{

        listPost();

    }, []);

    const listPost = async () =>{

        setIsLoading(true);

        try{

            const response = await listPostRequest();
            setPost(response.data.post);

        }catch (error) {
            return toast.error(
                postData.e?.response?.data || "Can't Read the posts"
            )
        } finally {

            setIsLoading(false);

        }

    }

    return (

        <div>
            {isLoading ? (
                <h5>Loading... Wait a Minute</h5>
            ):(
                <div>
                    {Array.isArray(post) && post.length > 0 ?
                    (
                        post.map(post =>(

                            <div key={post._id}>

                                <div>

                                    <h2>{post.postName}</h2>
                                    <h2>{post.postDescription}</h2>
                                    <h2>{post.postImage}</h2>
                                    <h2>{post.proyectLink}</h2>
                                    <h2>{post.nameCreator}</h2>
                                    <h2>{post.nameComments}</h2>

                                </div>

                            </div>

                        ))
                    )    : (

                        <h5>NOT FOUND DATA, Sorry</h5>

                    )
                }
                </div>
            )
            }
        </div>

    )


}