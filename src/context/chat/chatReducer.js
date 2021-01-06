import { types } from "../../types/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    default:
    case types.GET_USUARIOS:
      return {
        ...state,
        usuarios: [...action.payload]
      };
      return state;
  }
};
