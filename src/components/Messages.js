import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        {/* <!-- Mensaje recibido Inicio --> */}
        <IncomingMessage />
        {/* <!-- Mensaje recibido Fin --> */}

        {/* <!-- Mensaje enviado inicio --> */}
        <OutgoingMessage />
        {/* <!-- Mensaje enviado inicio --> */}
      </div>
      {/* <!-- Historia Fin --> */}

      {/* <!-- Enviar mensaje Inicio --> */}
      <SendMessage />
      {/* <!-- Enviar mensaje Fin --> */}
    </div>
  );
};
