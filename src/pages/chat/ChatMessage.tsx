import React from "react";
import { useAuthStore } from "../../store/authStore";

const ChatMessage: React.FC<any> = ({ senderId, text, profilePic }) => {
	const { user } = useAuthStore();

	const isSent = senderId === user?._id;

	return (
		<div
			className={`flex items-start space-x-2 ${isSent ? "justify-end" : ""}`}
		>
			{!isSent && (
				<img
					alt="Sender profile"
					className="w-10 h-10 rounded-full"
					src={profilePic || "https://randomuser.me/api/portraits/men/10.jpg"}
				/>
			)}
			<div>
				<div
					className={`p-2 py-3   rounded-lg relative ${
						isSent ? "bg-gray-100 text-gray-800" : "bg-primary text-white"
					}`}
				>
					<p className="text-sm">{text}</p>
				</div>
			</div>

			{isSent && (
				<img
					alt="Sender profile"
					className="w-10 h-10 rounded-full"
					src={profilePic || "https://randomuser.me/api/portraits/men/12.jpg"}
				/>
			)}
		</div>
	);
};

export default ChatMessage;
