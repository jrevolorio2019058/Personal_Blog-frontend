/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "./Input";
import {
  validatePasswordMessage,
  validatePassword,
  validateUsernameOrEmail,
  validateUsernameOrEmailMessage
} from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
  const {login} = useLogin();

  const [formState, setFormState] = useState({
    usernameOrEmail: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
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

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "usernameOrEmail":
        isValid = validateUsernameOrEmail(value)
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) =>({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  const handleLogin = (event) => {
    event.preventDefault()
    login(formState.usernameOrEmail.value, formState.password.value)
  }

  const isSubmitButtonDisabled =  !formState.password.isValid || !formState.usernameOrEmail.isValid
  return (
    <div className="login-container">
        <form className="auth-form">
        <Input
          field="usernameOrEmail"
          label="Email or User"
          value={formState.usernameOrEmail.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.usernameOrEmail.showError}
          validationMessage={validateUsernameOrEmailMessage}
        />
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={validatePasswordMessage}
        />
            <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                Log in
            </button>
        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">
            Do not you have an account yet? Sign up...!
        </span>
    </div>
  );
};