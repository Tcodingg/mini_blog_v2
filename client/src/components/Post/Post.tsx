import React from "react";
import "./Post.css";

import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { post } from "../../redux/actionTypes";

const Post: React.FC<post> = ({ title, note, likes, img, _id }) => {
   return (
      <div key={_id} className="posts-container">
         <h5>{title}</h5>
         <img src={img} alt="...loading" />
         <p>{note}</p>
         <div className="icons-container">
            <div className="thumbup-counter icons">
               <IoMdThumbsUp className="thumb-up " />
               <p style={{ fontSize: "10px" }}>{likes}</p>
            </div>
            <MdDelete className="delete icons" />
         </div>
      </div>
   );
};

export default Post;
