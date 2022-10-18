// import { useContext } from "react";
// import AppContext from "../context/AppContext";
// import MessageList from "./MessageList";

// function Message() {
//   const { messages, message, sender, time, deleteMessage } =
//     useContext(AppContext);

//   if (!messages) {
//     return null;
//   } else {
//     return (
//       <div className="message" key={message.id}>
//         <span>{time}</span>
//         <span className="sender" sender={sender}>
//           {sender}
//         </span>
//         <span>{message}</span>
//         <span onClick={() => deleteMessage()} className="delete">
//           ❌
//         </span>
//       </div>
//     );
//   }
// }

// export default Message;
