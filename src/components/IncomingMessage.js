import React from "react";
import { horaMes } from "../helpers/horaMes";

export const IncomingMessage = ({ message }) => {
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message.mensaje}</p>
          <span className="time_date"> {horaMes(message.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};
