import React, { useContext } from "react";
import { scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const SidebarChatItem = ({ usuario }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const onClick = async () => {
    dispatch({ type: types.GET_CHAT, payload: usuario.uid });
    const resp = await fetchConToken(`mensajes/${usuario.uid}`);
    dispatch({ type: types.LOAD_CHAT, payload: resp.mensajes });
    scrollToBottom("mensajes");
  };

  return (
    <div
      className={`chat_list ${usuario.uid === chatState.chatActivo &&
        "active_chat"}`}
      onClick={onClick}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario.nombre}</h5>
          {usuario.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
