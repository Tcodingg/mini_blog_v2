export enum actionTypes {
   GET_POST = "GET_POST",
   DELETE_POST = "DELETE_POST",
   CREATE_POST = "CREATE_POST",
   LIKE_POST = "LIKE_POST",
}

type actionGetPost = {
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

type actionDeletePost = {
   postId: Number;
};

type actionCreatePost = {
   newPost: post;
};

type actionLikePost = {
   postId: Number;
};

export type Actions =
   | actionGetPost
   | actionDeletePost
   | actionCreatePost
   | actionLikePost;
