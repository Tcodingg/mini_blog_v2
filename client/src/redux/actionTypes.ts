export enum actionTypes {
   GET_POST = "GET_POST",
   DELETE_POST = "DELETE_POST",
   CREATE_POST = "CREATE_POST",
   LIKE_POST = "LIKE_POST",
}

type actionGetPost = {
   type: actionTypes.GET_POST;
   payload: posts[];
};

export interface posts {
   _id: Number;
   title: string;
   note: string;
   img: string;
   likes: Number;
}

type actionDeletePost = {
   postId: Number;
};

type actionCreatePost = {
   post: posts;
};

type actionLikePost = {
   postId: Number;
};

export type Actions =
   | actionGetPost
   | actionDeletePost
   | actionCreatePost
   | actionLikePost;
