import { useContext } from "react";
import AppContext from "../context/AppContext";

function Message() {
  const { message, sender, time, deleteMessage } = useContext(AppContext);

  if (!message) {
    console.log("no message provided");
  } else {
    return (
      <div className="message" id={message.id}>
        <span>{time}</span>
        <span className="sender">{sender}</span>
        <span>{message}</span>
        <span onClick={() => deleteMessage()} className="delete">
          ❌
        </span>
      </div>
    );
  }
}

export default Message;
