import "./index.css";
import Header from "./components/Header";
import Chatbox from "./components/Chatbox";
import Message from "./components/Message";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import LonelyButton from "./components/LonelyButton";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div id="main">
        <Header />
        <Chatbox />
        {/* <MessageList /> */}
        <ChatInput />
        <LonelyButton />
      </div>
    </AppProvider>
  );
}

export default App;
