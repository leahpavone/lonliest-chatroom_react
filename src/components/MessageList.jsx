import { useContext } from "react";
import AppContext from "../context/AppContext";
// import Message from "./Message";

function MessageList() {
  const { messages, sender, time, deleteMessage } = useContext(AppContext);

  return (
    <div id="chatbox">
      <div className="message" id="2">
        <span>10:22</span>
        <span className="sender">Myself:</span>
        <span>Is it me you're looking for?</span>
        <span className="delete">❌</span>
      </div>
      <div className="message" id="1">
        <span>10:21</span>
        <span className="sender">Me:</span>
        <span>Hello?</span>
        <span className="delete">❌</span>
      </div>

      <div>
        {messages.map((message) => {
          return (
            <div className="message" key={message.id}>
              <span>{time}</span>
              <span className="sender" sender={message.sender}>
                {sender}
              </span>
              <span>{message}</span>
              <span
                onClick={() => deleteMessage(message.id)}
                className="delete"
              >
                ❌
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageList;
