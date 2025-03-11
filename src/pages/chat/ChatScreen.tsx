import { Users } from "lucide-react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSidebar from "./ChatSidebar";
import MessageInput from "./MessageInput";
import { useMessageStore } from "../../store/messageStore";
import CustomNoChatSelected from "../../components/CustomNoChatSelected";

const ChatScreen = () => {
	const { messages } = useMessageStore();

	return (
		<div className="bg-white  text-gray-800">
			<div className="flex flex-col md:flex-row">
				<div
					className={`bg-primary px-0 md:px-1 w-full md:w-[80px] transition-all ease-in-out duration-200`}
				>
					<div className=" hidden md:flex justify-start items-center px-6 my-5 pt-2">
						<Users className="z-10" color="white" />
					</div>
					<div className="pe-1">
						<ChatSidebar />
					</div>
				</div>
				<div className="flex w-full justify-between flex-col h-screen">
					{!messages ? (
						<CustomNoChatSelected />
					) : (
						<>
							<ChatHeader />
							<ChatMessages />
							<MessageInput />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ChatScreen;
