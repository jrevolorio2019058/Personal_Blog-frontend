import { Navbar } from "../../componets/navbar/Navbar";

import { Post } from "../../componets/post/Post";

import './mainPage.css';

export const MainPage = () => {

  return (
    <div className="dashboard-container">
      <Navbar/>
      <Post/>
    </div>
  );
};