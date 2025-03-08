import { Users } from "lucide-react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSidebar from "./ChatSidebar";
import MessageInput from "./MessageInput";

const ChatScreen = () => {
	return (
		<div className="bg-white  text-gray-800">
			<div className="flex flex-col md:flex-row">
				<div
					className={`bg-primary px-0 md:px-1 w-full md:w-[120px] transition-all ease-in-out duration-200`}
				>
					<div className=" hidden md:flex justify-start items-center px-6 my-5 pt-2">
						<Users className="z-10" color="white" />
					</div>
					<div className="px-4 ">
						<ChatSidebar />
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
