import { useState } from 'react';

import { Input } from '../Input';

import { useComment } from '../../shared/hooks';

export const AddComment = () =>{

    const {addComment, isLoading} = useComment();

    const [formState, setFormState] = useState({

        creatorComment: {

            value: "",
            isValid: false,
            showError: false

        },

        titleComment: {
            value: "",
            isValid: false,
            showError: false,
        },

        descriptionComment: {
            value: "",
            isValid: false,
            showError: false,
        },

        postName: {
            value: "",
            isValid: false,
            showError: false,
          }

    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            value,
          },
        }));
      };

    const handleAddComment = (event) => {
        event.preventDefault();
        addComment(formState.creatorComment.value, 
            formState.titleComment.value,
            formState.descriptionComment.value,
            formState.postName.value);
    };

    const isSubmitButtonDisabled = isLoading 

  return (
      <div className='full-page'>
        <div className="comment-container">
          <form className="comment-form">
          <Input
              field="creatorComment"
              label="Creator Comment"
              value={formState.creatorComment.value}
              onChangeHandler={handleInputValueChange}
              type="text"
            />
            <Input
              field="titleComment"
              label="Tittle Comment"
              value={formState.titleComment.value}
              onChangeHandler={handleInputValueChange}
              type="text"
            />
            <Input
              field="descriptionComment"
              label="Description Comment"
              value={formState.descriptionComment.value}
              onChangeHandler={handleInputValueChange}
              type="text"
            />
            <Input
              field="postName"
              label="Post Name"
              value={formState.postName.value}
              onChangeHandler={handleInputValueChange}
              type="text"
            />
            <button className='add-comment' onClick={handleAddComment} disabled={isSubmitButtonDisabled}>
              AddComment
            </button>
          </form>
        </div>
      </div>
      );
};