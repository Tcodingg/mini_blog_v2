import { actionTypes, Actions, post } from "./actionTypes";

interface stateInterface {
   loading: boolean;
   posts: post[];
   error: any;
}

// let initialState: post[] = [];
let initialState: stateInterface = {
   loading: false,
   posts: [],
   error: null,
};

const reducer = (
   state: stateInterface = initialState,
   action: Actions
): stateInterface => {
   switch (action.type) {
      case actionTypes.LOADING_POST:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.GET_POST:
         return {
            ...state,
            posts: action.payload,
         };
      case actionTypes.CREATE_POST:
         return {
            ...state,
            posts: [...state.posts, action.payload],
         };

      case actionTypes.DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter((item) => item._id !== action.payload),
         };

      case actionTypes.LIKE_POST:
         return {
            ...state,
            posts: state.posts.map((item) =>
               item._id === action.payload._id ? action.payload : item
            ),
         };

      case actionTypes.ERROR_POST:
         return {
            ...state,
            error: action.payload,
         };

      default:
         return state;
   }
};

export default reducer;
