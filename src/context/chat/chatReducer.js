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
    case types.NEW_MESSAGE:
      if (
        state.chatActivo === action.payload.de ||
        state.chatActivo === action.payload.para
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload]
        };
      } else {
        return state;
      }
    case types.LOAD_CHAT:
      return { ...state, mensajes: action.payload };
    case types.EXIT:
      return {
        uid: "",
        chatActivo: null,
        usuarios: [],
        mensajes: []
      };
    default:
      return state;
  }
};
