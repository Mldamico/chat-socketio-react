import React from "react";
import { horaMes } from "../helpers/horaMes";

export const OutgoingMessage = ({ message }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{message.mensaje}</p>
        <span className="time_date"> {horaMes(message.createdAt)}</span>
      </div>
    </div>
  );
};
