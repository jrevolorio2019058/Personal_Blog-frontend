import { AddComment } from '../../componets/comment/AddComment';

import { Navbar } from "../../componets/navbar/Navbar";

import './comment.css';

export const CommentPage = () => {

  return (
    <div>
      <Navbar/>
      <AddComment/>
    </div>
  );
};