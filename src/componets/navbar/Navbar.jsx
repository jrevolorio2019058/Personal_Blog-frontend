import { useNavigate } from "react-router-dom";

import { useUserDetails } from '../../shared/hooks';

const NavButton = ({text, onClickHandler}) => {
    
    return (
        
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>

    )

}

export const Navbar = () => {
  const { isLogged, logout } = useUserDetails();

  const navigate = useNavigate()

  const handleNavigateToAuthPage = () => {
    navigate('/')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="nav-container">
      <div className="nav-buttons-container">
        {!isLogged ? (
          <NavButton text="Login" onClickHandler={handleNavigateToAuthPage} />
        ) : (
          <div>
            <NavButton text="Logout" onClickHandler={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};