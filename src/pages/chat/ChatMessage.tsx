import React from "react";
import { ChatMessageProps } from "../../types/chat";

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  message,
  time,
  profilePic,
  isSent,
}) => (
  <div className={`flex items-start space-x-2 ${isSent ? "justify-end" : ""}`}>
    {!isSent && (
      <img
        alt={`Profile picture of ${sender}`}
        className="w-10 h-10 rounded-full"
        height="40"
        src={profilePic}
        width="40"
      />
    )}
    <div>
      <div
        className={`p-3 py-4 rounded-lg  relative ${
          isSent ? "bg-gray-100 text-gray-800" : "bg-primary text-white"
        }`}
      >
       <div  >
       <p>{message}</p>
       </div>
        <span
          className={`absolute bottom-1 -my-1 right-2 text-xs ${
            isSent ? "text-gray-500" : "text-gray-200"
          }`}
        >
          {time}
        </span>
      </div>
      <span className="text-xs text-gray-500">{sender}</span>
    </div>
    {isSent && (
      <img
        alt={`Profile picture of ${sender}`}
        className="w-10 h-10 rounded-full"
        height="40"
        src={profilePic}
        width="40"
      />
    )}
  </div>
);

export default ChatMessage;
