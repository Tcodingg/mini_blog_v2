import React from "react";
import "./Post.css";

import { IoMdThumbsUp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const Post: React.FC = () => {
   return (
      <div className="posts-container">
         <h5>Rock Climbing</h5>
         <img
            src="https://cdn.thecoolist.com/wp-content/uploads/2021/03/Rock-climbing-terminology.jpg"
            alt="...loading"
         />
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            dicta alias est id sunt. Iusto dolore nemo iste eaque ipsa!
         </p>
         <div className="icons-container">
            <div className="thumbup-counter icons">
               <IoMdThumbsUp className="thumb-up " />
               <p style={{ fontSize: "10px" }}>10</p>
            </div>
            <MdDelete className="delete icons" />
         </div>
      </div>
   );
};

export default Post;
