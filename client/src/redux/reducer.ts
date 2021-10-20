import { actionTypes, Actions, post } from "./actionTypes";

let initialState: post[] = [];

const reducer = (state = initialState, action: Actions) => {
   switch (action.type) {
      case actionTypes.GET_POST:
         return action.payload;
      case actionTypes.CREATE_POST:
         return [...state, action.payload];
      case actionTypes.DELETE_POST:
         return state.filter((item) => item._id !== action.payload);
      case actionTypes.LIKE_POST:
         return state.map((item) =>
            item._id === action.payload._id ? action.payload : item
         );
      default:
         return state;
   }
};

export default reducer;
