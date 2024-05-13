import { listComment as listCommentRequest} from "../../services";

import { useEffect } from "react";

import { useState } from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

export const Comment = () => {

    const NavButton = ({text, onClickHandler}) => {
    
        return (
            
            <span className="nav-button" onClick={onClickHandler}>
                {text}
            </span>
    
        )
    
    }

    const [comment, setComment] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const listComment = async () =>{

        const navigate = useNavigate();

        setIsLoading(true);

        try{

            const response = await listCommentRequest();
            console.log(response.data);
            setComment(response.data.comment);

        }catch (error) {

            console.log(error);

            return toast.error(
                comment.e?.response?.data || "Can't Read the posts"
            )
        } finally {

            setIsLoading(false);

        }

        console.log(comment);

    }

    useEffect(() =>{

        listComment();

    }, []);

    const handleNavigateToCommentPage = () => {
        navigate('/comment')
      }

    return (

            <div className="content-form">
                {isLoading ? (
                    <p>Loading... Wait a Minute</p>
                ):(
                    <div className="form-content">

                        <h2 className="tittle-comments">Comentarios</h2>

                        <NavButton text="Add Comment" onClickHandler={handleNavigateToCommentPage} />

                        <h4 className="lines">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</h4>

                            {Array.isArray(comment) && comment.length > 0 ?
                            (
                                comment.map(comment =>(

                                    <div key={comment._id}>

                                        <h4 className="title">{comment.titleComment}</h4>
                                        <h4 className="description-comment">- {comment.descriptionComment}</h4>
                                        <h4 className="user">Usuario: {comment.creatorComment}</h4>
                                        <h4 className="proyect">Proyecto: {comment.postName}</h4>
                                        <h4 className="lines">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</h4>

                                    </div>

                                ))
                                )  : (

                                    <h5>NOT FOUND DATA, Sorry</h5>

                                )
                            }
                    </div>
                )
                }
            </div>

    )


}