import React, { useEffect } from "react";
import "./Posts.css";
import Post from "../Post/Post";

import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/action";
import { RootState } from "../../redux/rootState";
const Posts: React.FC = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getPost());
   }, [dispatch]);

   const posts = useSelector((state: RootState) => state.reducer);

   return (
      <div className="posts">
         {posts.map((post) => {
            return (
               <Post
                  title={post.title}
                  note={post.note}
                  likes={post.likes}
                  img={post.img}
                  _id={post._id}
               />
            );
         })}
      </div>
   );
};

export default Posts;
