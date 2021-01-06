import { types } from "../../types/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.GET_USUARIOS:
      return {
        ...state,
        usuarios: [...action.payload]
      };
    case types.GET_CHAT:
      if (state.chatActivo === action.payload) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: []
      };
    default:
      return state;
  }
};
