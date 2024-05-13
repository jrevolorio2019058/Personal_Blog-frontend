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

        <div className="full-page">
            <div className="content">
                {isLoading ? (
                    <p>Loading... Wait a Minute</p>
                ):(
                    <div className="dirrection">
                        {Array.isArray(post) && post.length > 0 ?
                        (
                            post.map(post =>(

                                <div key={post._id}>

                                    <div className="cards">

                                        <h1 className="tittle">{post.postName}</h1>

                                        <h2 className="creator">Creator: {post.nameCreator}</h2>

                                        <div className="image">
                                            <img src={post.postImage}/>
                                        </div>

                                        <h2 className="description">- {post.postDescription}</h2>

                                        <div className="link-container">

                                            {Array.isArray(post.proyectLink) && post.proyectLink.length > 1? (
                                                post.proyectLink.map((link, index) => (
                                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                                        <img className="link" src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' />
                                                    </a>
                                                ))
                                            ) : (
                                                
                                                <div className="link">
                                                    <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt={post.proyectLink}></img>
                                                </div>
                                            )}

                                        </div>

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
        </div>

    )


}

/*{Array.isArray(post.nameComments) && post.nameComments.length > 1? (
    post.nameComments.map((link, index) => (
        <div className="comments" key={index}>{link}</div>
    ))
) : (
    <div className="comments">{post.nameComments}</div>
)}*/