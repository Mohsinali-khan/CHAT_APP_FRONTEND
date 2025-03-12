import React from "react";
import ChatMessage from "./ChatMessage";
import { useMessageStore } from "../../store/messageStore";
import { Loader2 } from "lucide-react";

const ChatMessages: React.FC = () => {
	const { messages, selectedUserLoading } = useMessageStore();

	if (selectedUserLoading)
		return (
			<div className="flex flex-row justify-center h-screen items-center">
				<Loader2 className="size-10  text-primary animate-spin" />
			</div>
		);
	return (
		<div className="overflow-y-auto h-screen p-4 space-y-4">
			{messages && messages.map((msg) => <ChatMessage {...msg} />)}
		</div>
	);
};

export default ChatMessages;
