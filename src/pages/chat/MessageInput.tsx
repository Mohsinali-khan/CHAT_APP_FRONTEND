import { Ellipsis, Send } from "lucide-react";
import React, { useState } from "react";
import { useMessageStore } from "../../store/messageStore";
import SendMessageSound from "../../assets/sound/message-send.mp3";

const MessageInput: React.FC = () => {
	const { sendMessage, sendMessageLoading, selectedUser } = useMessageStore();
	const [message, setMessage] = useState("");

	if (!selectedUser) return;

	const playSound = () => {
		const audio = new Audio(SendMessageSound);
		audio.play().catch((error) => {
			console.error("Error playing sound:", error);
		});
	};

	const handleSendClick = async () => {
		if (message.trim()) {
			const { success } = await sendMessage(message);
			if (success) {
				playSound();
				setMessage("");
			}
		}
	};

	return (
		<div className="flex items-center p-4 border-t border-gray-200">
			<input
				className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
				placeholder="Enter Message..."
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<div className="flex items-center space-x-2 ml-4">
				<button
					className="bg-primary text-white p-2 rounded-full"
					onClick={handleSendClick}
				>
					{sendMessageLoading ? (
						<Ellipsis size={20} className="animate-pulse" />
					) : (
						<Send size={20} />
					)}
				</button>
			</div>
		</div>
	);
};

export default MessageInput;
