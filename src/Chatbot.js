import React, { useState } from "react";
import Chatmessage from "./Chatmessage";
import { analyze } from "./ifelse";
import './chatbot.css';
export default function Chatbot() {
  const [messages, setmessages] = useState([
    {
      message: "Hi ,How can i help you? ",
    },
  ]);
  const [text, settext] = useState("");
  const onSend = async () => {
    let list = [...messages, { message: text, user: true }];
      const reply = analyze(text);
      list = [...list, { message: reply }];
    setmessages(list);
    settext("");
    setTimeout(() => {
      document.querySelector('#copy').scrollIntoView();
    })
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center ">
        <img src="chatbot.jpeg" alt="logo" height={100} width={100} />
        <h2 className="text-info">Chatbot</h2>
      </div>
      <div className="chat-message">
        {messages.length > 0 &&
          messages.map((data) => <Chatmessage {...data} />)}
        <div className="d-flex m-2">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-secondary m-1"
            onClick={onSend}
          >Send
          </button>
        </div>
        <div id="copy" className="ml-1">
          Personal Assistant
        </div>
      </div>
    </div>
  );
}
