import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useMessageStore } from "../../store/messageStore";

const ChatHeader: React.FC = () => {
	const { selectedUser } = useMessageStore();
	return (
		<>
			<div className="flex items-center justify-between p-4 border-b border-gray-200">
				<div className="flex items-center space-x-2">
					<img
						alt="Profile picture of Doris Brown"
						className="w-10 h-10 rounded-full"
						height="40"
						src="https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg"
						width="40"
					/>
					<span className="font-semibold">{selectedUser?.username}</span>
					<div className="size-2 rounded-full bg-green-500"></div>
				</div>
				<div className="flex items-center space-x-4">
					<MoreHorizontal className="text-gray-500" size={20} />
				</div>
			</div>
		</>
	);
};
export default ChatHeader;
