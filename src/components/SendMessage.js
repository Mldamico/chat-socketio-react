import React, { useState } from "react";

export const SendMessage = () => {
  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (message.length === 0) {
      return;
    }

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
