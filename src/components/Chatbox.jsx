import { useContext } from "react";
import AppContext from "../context/AppContext";
import Message from "./Message";
import MessageList from "./MessageList";

function Chatbox() {
  const { messages, message, handleDelete } = useContext(AppContext);
  // const { data, id } = message;
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
      <MessageList handleDelete={handleDelete} />
    </div>
  );
}

export default Chatbox;
