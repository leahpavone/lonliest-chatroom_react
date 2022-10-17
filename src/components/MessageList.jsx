import { useContext } from "react";
import AppContext from "../context/AppContext";
import Message from "./Message";

function MessageList() {
  const { messages, message, handleDelete } = useContext(AppContext);
  return (
    <Message>
      {messages.map((message) => {
        <Message
          key={message.id}
          message={message}
          handleDelete={handleDelete}
        />;
      })}
    </Message>
  );
}

export default MessageList;
