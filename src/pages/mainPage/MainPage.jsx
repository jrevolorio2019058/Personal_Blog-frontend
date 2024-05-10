import { Navbar } from "../../componets/navbar/Navbar";

import { useUserDetails } from "../../shared/hooks/useUserDetails";

import './mainPage.css';

export const MainPage = () => {

  const { isLogged } = useUserDetails();

  return (
    <div className="dashboard-container">
      <Navbar />
    </div>
  );
};