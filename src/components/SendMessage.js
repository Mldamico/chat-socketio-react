import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SocketContext } from "../context/SocketContext";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);

  const { chatState } = useContext(ChatContext);
  const onSubmit = e => {
    e.preventDefault();
    if (message.length === 0) {
      return;
    }
    socket?.emit("mensaje-personal", {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje: message
    });
    setMessage("");
  };
  return (
    <form className="type_msg row" onSubmit={onSubmit}>
      <div className="input_msg_write col-sm-9">
        <input
          type="text"
          className="write_msg"
          placeholder="Mensaje..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <div className="col-sm-3 text-center">
        <button className="msg_send_btn mt-3" type="submit">
          enviar
        </button>
      </div>
    </form>
  );
};
