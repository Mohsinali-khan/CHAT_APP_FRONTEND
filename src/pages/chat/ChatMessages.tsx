import React from "react";
import ChatMessage from "./ChatMessage";
import { Message } from "../../types/chat";

const ChatMessages: React.FC = () => {
	const messages: Message[] = [
		{
			sender: "Doris Brown",
			message: "Good Morning",
			time: "10:00",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Patricia Smith",
			message:
				"Good morning, How are you? What about our next meeting?  Good morning, How are you? What about our next meeting? Good morning, How are you? What about our next meeting? Good morning, How are you? What about our next meeting?  ",
			time: "10:02",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/SwXncsuvXlVmioP09BqTQtW4D0aP9bp3mRXdlrCqgAo.jpg",
			isSent: true,
		},
		{
			sender: "Doris Brown",
			message: "Yeah everything is fine",
			time: "10:05",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Doris Brown",
			message: "& Next meeting tomorrow 10.00AM",
			time: "10:05",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Doris Brown",
			message: "Good Morning",
			time: "10:00",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Patricia Smith",
			message:
				"Good morning, How are you? What about our next meeting?  Good morning, How are you? What about our next meeting? Good morning, How are you? What about our next meeting? Good morning, How are you? What about our next meeting?  ",
			time: "10:02",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/SwXncsuvXlVmioP09BqTQtW4D0aP9bp3mRXdlrCqgAo.jpg",
			isSent: true,
		},
		{
			sender: "Doris Brown",
			message: "Yeah everything is fine",
			time: "10:05",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Doris Brown",
			message: "& Next meeting tomorrow 10.00AM",
			time: "10:05",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Doris Brown",
			message: "Good Morning",
			time: "10:00",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Patricia Smith",
			message:
				"Good morning, How are you? What about our next meeting?  Good morning, How are you? What about our next meeting? Good morning, How are you? What about our next meeting? Good morning, How are you? What about our next meeting?  ",
			time: "10:02",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/SwXncsuvXlVmioP09BqTQtW4D0aP9bp3mRXdlrCqgAo.jpg",
			isSent: true,
		},
		{
			sender: "Doris Brown",
			message: "Yeah everything is fine",
			time: "10:05",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
		{
			sender: "Doris Brown",
			message: "& Next meeting tomorrow 10.00AM ",
			time: "10:05",
			profilePic:
				"https://storage.googleapis.com/a1aa/image/cxQmlvVc9xNqBPfD7zShj4JXX9Pr5Z5jbKuhpbZ9qTw.jpg",
			isSent: false,
		},
	];

	return (
		<div className="flex-1  overflow-y-auto p-4 space-y-4">
			{messages.map((msg, index) => (
				<React.Fragment key={index}>
					{index === 2 && (
						<div className="flex justify-center">
							<span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
								Today
							</span>
						</div>
					)}
					<ChatMessage {...msg} />
				</React.Fragment>
			))}
		</div>
	);
};

export default ChatMessages;
