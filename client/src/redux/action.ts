import { Dispatch } from "redux";
import axios from "axios";

import { actionTypes, post } from "./actionTypes";

const url = "http://localhost:5000/posts";

// ==== get all posts ====
export const getPost = () => async (dispatch: Dispatch) => {
   try {
      const { data } = await axios.get(url);
      dispatch({
         type: actionTypes.GET_POST,
         payload: data,
      });
   } catch (error) {
      console.log(error);
   }
};

// ==== create a post ====

export const createPost = (post: post) => async (dispatch: Dispatch) => {
   try {
      const { data } = await axios.post(url, { post });
      dispatch({
         type: actionTypes.CREATE_POST,
         payload: data,
      });
   } catch (error) {
      console.log(error);
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
      console.log(error);
   }
};
// ==== like a post ====

export const likePost = (postId: string) => async (dispatch: Dispatch) => {
   try {
      const { data } = await axios.patch(`${url}/${postId}/likePost`);
      dispatch({
         type: actionTypes.LIKE_POST,
         payload: data,
      });
   } catch (error) {
      console.log(error);
   }
};
