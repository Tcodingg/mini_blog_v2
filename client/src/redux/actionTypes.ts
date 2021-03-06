export enum actionTypes {
   GET_POST = "GET_POST",
   DELETE_POST = "DELETE_POST",
   CREATE_POST = "CREATE_POST",
   LIKE_POST = "LIKE_POST",
   LOADING_POST = "LOADING_POST",
   ERROR_POST = "ERROR_POST",
}

export type actionGetPost = {
   type: actionTypes.GET_POST;
   payload: post[];
};

export interface post {
   _id: string;
   title: string;
   note: string;
   img: string;
   likes: Number;
}

export type actionDeletePost = {
   type: actionTypes.DELETE_POST;
   payload: string;
};

export type actionCreatePost = {
   type: actionTypes.CREATE_POST;
   payload: post;
};

export type actionLikePost = {
   type: actionTypes.LIKE_POST;
   payload: post;
};

type actionLoadingPost = {
   type: actionTypes.LOADING_POST;
   payload: boolean;
};

type actionErrorPost = {
   type: actionTypes.ERROR_POST;
   payload: String;
};

export type Actions =
   | actionGetPost
   | actionDeletePost
   | actionCreatePost
   | actionLikePost
   | actionLoadingPost
   | actionErrorPost;
