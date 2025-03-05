import React from "react";

const ChatScreen: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row h-screen">
			{/* Sidebar */}
			<div className="w-full md:w-1/5 bg-primary text-white p-4"></div>

			{/* Chat Section */}
			<div className="w-full md:w-3/4 flex flex-col h-full"></div>
		</div>
	);
};

export default ChatScreen;
