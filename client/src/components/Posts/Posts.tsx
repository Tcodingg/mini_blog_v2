import React, { useEffect } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/action";
import { RootState } from "../../redux/rootState";
const Posts: React.FC = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getPost());
   }, [dispatch]);

   const { posts, loading } = useSelector((state: RootState) => state.reducer);
   return (
      <div className="posts">
         {loading ? (
            <div
               style={{
                  display: "flex",
                  margin: "0 auto",
                  alignItems: "center",
                  width: "300px",
               }}
            >
               <Box sx={{ width: "100%" }}>
                  <LinearProgress color="inherit" />
               </Box>
            </div>
         ) : (
            posts.map((post, i) => {
               return (
                  <div key={i}>
                     <Post
                        title={post.title}
                        note={post.note}
                        likes={post.likes}
                        img={post.img}
                        _id={post._id}
                     />
                  </div>
               );
            })
         )}
      </div>
   );
};

export default Posts;
