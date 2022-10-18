import { useContext } from "react";
import AppContext from "../context/AppContext";

function ChatInput() {
  const { inputRef, handleSubmit } = useContext(AppContext);

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
    </form>
  );
}

export default ChatInput;
