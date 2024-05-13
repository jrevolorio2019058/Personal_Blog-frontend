import { useState } from 'react';

import { useComment } from '../../shared/hooks';

import {Input} from '../Input';

export const addComment = ({ switchAuthHandler }) =>{

    const {comment, isLoading} = useComment();

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
        comment(formState.creatorComment.value, 
            formState.titleComment.value,
            formState.descriptionComment.value,
            formState.postName.value);
    };

    const isSubmitButtonDisabled = isLoading
    

    return (
        <div className="register-container">
          <form className="auth-form">
          <Input
              field="creatorComment"
              label="Creator Comment"
              value={formState.creatorComment.value}
              onChangeHandler={handleInputValueChange}
              type="text"
            />
            <Input
              field="titleComment"
              label="Title Comment"
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
            <button onClick={handleAddComment} disabled={isSubmitButtonDisabled}>
              Add Comment
            </button>
          </form>
        </div>
      );
};