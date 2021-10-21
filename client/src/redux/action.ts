import { Dispatch } from "redux";
import axios from "axios";

import { actionTypes } from "./actionTypes";

const url = "https://mini-blog-v2.herokuapp.com/posts";

// ==== get all posts ====
export const getPost = () => async (dispatch: Dispatch) => {
   dispatch({
      type: actionTypes.LOADING_POST,
   });
   try {
      const { data } = await axios.get(url);
      dispatch({
         type: actionTypes.GET_POST,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.ERROR_POST,
         payload: error,
      });
   }
};

// ==== create a post ====
type postType = {
   title: string;
   note: string;
   img: string;
};

export const createPost = (post: postType) => async (dispatch: Dispatch) => {
   try {
      const { data } = await axios.post(url, { post });
      dispatch({
         type: actionTypes.CREATE_POST,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.ERROR_POST,
         payload: error,
      });
   }
};

// ==== delete a post ====

export const deletePost = (postId: string) => async (dispatch: Dispatch) => {
   try {
      await axios.delete(`${url}/${postId}`);
      dispatch({
         type: actionTypes.DELETE_POST,
         payload: postId,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.ERROR_POST,
         payload: error,
      });
   }
};
// ==== like a post ====

export const likePost = (postId: string) => async (dispatch: Dispatch) => {
   try {
      console.log(postId);
      const { data } = await axios.patch(`${url}/${postId}/likePost`);
      dispatch({
         type: actionTypes.LIKE_POST,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.ERROR_POST,
         payload: error,
      });
   }
};
