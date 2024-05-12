import { useNavigate } from "react-router-dom";

const NavButton = ({text, onClickHandler}) => {
    
    return (
        
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>

    )

}

export const Navbar = () => {

  const navigate = useNavigate();

  var save = localStorage.getItem("user");

  const handleNavigateToAuthPage = () => {
    navigate('/auth')
  }

  const handleLogout = () => {
    
    localStorage.removeItem('user');
    saved = null;
    window.location.href = './'

  }

  return (
    <div className="nav-container">
      <div className="img-Kinal">
        <img src="/../../assets/img/logoKinal2.png"/> 
      </div>
      {save == null? (
        <NavButton text="Login" onClickHandler={handleNavigateToAuthPage} />
      ) : (
        <div>
          <NavButton text="Logout" onClickHandler={handleLogout} />
        </div>
      )}
    </div>
  );
};