import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className="mesgs">
      <div className="msg_history">
        {chatState.mensajes.map(mensaje =>
          mensaje.para === auth.uid ? (
            <IncomingMessage message={mensaje} key={mensaje._id} />
          ) : (
            <OutgoingMessage message={mensaje} key={mensaje._id} />
          )
        )}
      </div>

      <SendMessage />
    </div>
  );
};
