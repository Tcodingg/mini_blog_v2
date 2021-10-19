import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts: React.FC = () => {
   return (
      <div className="posts">
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </div>
   );
};

export default Posts;
