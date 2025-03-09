import { AlignJustify } from "lucide-react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSidebar from "./ChatSidebar";
import MessageInput from "./MessageInput";
import { useState } from "react";

const ChatScreen = () => {
  const [sidebartoggle, setSidebartoggle] = useState<boolean>(false);

  return (
    <div className="bg-white text-gray-800">
      <div className="flex">
        <div
          className={`bg-primary px-0 md:px-1 ${
            sidebartoggle &&
            "w-[300px] transition-all ease-in-out duration-200 "
          }`}
        >
          <div className="invisible md:visible flex justify-start items-center px-6 my-5 pt-2">
            <AlignJustify
            className=""
              onClick={() => setSidebartoggle(!sidebartoggle)}
              color="white"
            />
          </div>
          <div className="px-4 overflow-y-auto">
            <ChatSidebar sidebartoggle={sidebartoggle} />
          </div>
        </div>
        <div className="flex flex-col h-screen">
          <ChatHeader />
          <ChatMessages />
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
