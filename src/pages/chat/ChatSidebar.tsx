import { useEffect } from "react";
import CustomSidebarLoader from "../../components/skeleton/CustomSidebarLoader";
import { useMessageStore } from "../../store/messageStore";

interface UserPic {
	profile_picture_url: string;
	status: "online" | "offline";
}

export const randomUserPics: UserPic[] = [
	{
		profile_picture_url: "https://randomuser.me/api/portraits/men/1.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/women/2.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/men/3.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/women/4.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/men/5.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/women/6.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/men/7.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/women/8.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/men/9.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
	{
		profile_picture_url: "https://randomuser.me/api/portraits/women/10.jpg",
		status: Math.random() > 0.5 ? "online" : "offline",
	},
];

const ChatSidebar: React.FC = () => {
	const { getAllUsers, AllUsers, getAllUsersLoading } = useMessageStore();

	useEffect(() => {
		getAllUsers();
	}, []);

	if (getAllUsersLoading) return <CustomSidebarLoader />;

	if (!AllUsers) return;

	return (
		<div
			className={`flex flex-row snap-x snap-mandatory  justify-between items-center md:flex-col `}
		>
			{AllUsers.map((user, index) => (
				<div key={index} className="flex items-center">
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
