import React from "react";
import "./Post.css";

import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { deletePost, likePost } from "../../redux/action";
import { useDispatch } from "react-redux";

import { post } from "../../redux/actionTypes";

const Post: React.FC<post> = ({ title, note, likes, img, _id }) => {
   const dispatch = useDispatch();

   return (
      <div key={_id} className="posts-container">
         <h5>{title}</h5>
         <img src={img} alt="...loading" />
         <p>{note}</p>
         <div className="icons-container">
            <div className="thumbup-counter icons">
               <IoMdThumbsUp
                  onClick={() => dispatch(likePost(_id))}
                  className="thumb-up "
               />
               <p style={{ fontSize: "10px" }}>{likes}</p>
            </div>
            <MdDelete
               onClick={() => dispatch(deletePost(_id))}
               className="delete icons"
            />
         </div>
      </div>
   );
};

export default Post;
