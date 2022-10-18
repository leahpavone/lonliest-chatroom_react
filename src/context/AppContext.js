import { createContext, useState, useRef } from "react";
// import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [time, setTime] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef();

  const getRandomSender = () => {
    const senders = ["Me:", "Myself:", "I:"];
    return senders[Math.floor(Math.random() * senders.length)];
  };

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const URL = "https://api.chucknorris.io/jokes/random";

  const fetchJoke = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setTime(currentTime);
    setSender("Fact:");
    setMessage(data.value, data.id);
    setMessages([...messages, data.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTime(currentTime);
    setSender(getRandomSender());
    setMessage(inputRef.current.value);
    setMessages([...messages, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        messages,
        message,
        time,
        sender,
        fetchJoke,
        setMessages,
        setMessage,
        setSender,
        deleteMessage,
        handleSubmit,
        inputRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
