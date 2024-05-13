import { Navbar } from "../../componets/navbar/Navbar";

import { Post } from "../../componets/post/Post";

import { Comment } from "../../componets/comment/Comment";

import './mainPage.css';

export const MainPage = () => {

  return (
    <div className="dashboard-container">
      <div className="navbar-conteiner">
        <Navbar/>
      </div>
      <div className="postcontainer">
        <Post/>
      </div>
      <div className="postcontainer">
        <Comment/>
      </div>
    </div>
  );
};