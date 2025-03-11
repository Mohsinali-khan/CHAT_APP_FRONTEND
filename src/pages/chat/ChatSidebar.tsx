import { useEffect } from "react";
import CustomSidebarLoader from "../../components/skeleton/CustomSidebarLoader";
import { useMessageStore } from "../../store/messageStore";

const ChatSidebar: React.FC = () => {
	const { getAllUsers, AllUsers, getAllUsersLoading, getCurrentUserMessages } =
		useMessageStore();

	useEffect(() => {
		getAllUsers();
	}, []);

	if (getAllUsersLoading) return <CustomSidebarLoader />;
	if (!AllUsers) return;

	const selectUser = async (id: string) => {
		await getCurrentUserMessages(id);
	};

	return (
		<div
			className={`flex flex-row snap-x snap-mandatory gap-4 px-3 md:px-0 md:gap-0  justify-start items-center md:flex-col `}
		>
			{AllUsers.map((user, index) => (
				<div
					onClick={() => selectUser(user._id)}
					key={index}
					className="flex items-center"
				>
					<div>
						<img
							alt={`Profile picture of User ${index + 1}`}
							className="w-10 h-10 border hover:border-2 hover:border-dashed border-white object-cover rounded-full"
							src={
								user.profilePic ||
								"https://randomuser.me/api/portraits/men/7.jpg"
							}
						/>
						<div
							className={`relative -top-3 -right-8 w-2.5 h-2.5  rounded-full ${"bg-green-500"}`}
						></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ChatSidebar;
