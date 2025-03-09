import CustomSidebarLoader from "../../components/skeleton/CustomSidebarLoader";

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

const ChatSidebar: React.FC<{ sidebartoggle: boolean }> = ({
  sidebartoggle,
}) => {


  return (
    <div className={` my-2 `}>
      {randomUserPics.map((user, index) => (
        <div key={index} className="flex items-center my-1">
          <div>
            <img
              alt={`Profile picture of User ${index + 1}`}
              className="w-10 h-10 border hover:border-2 hover:border-dashed border-white object-cover rounded-full"
              src={user.profile_picture_url}
            />
            <div
              className={`relative -top-3 -right-8 w-2.5 h-2.5  rounded-full ${
                user.status === "online" ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          </div>
          {sidebartoggle && (
            <div className="flex flex-col">
              <span className={`ml-3 text-white text-sm text-nowrap`}>
                User {index + 1}
              </span>
              <span className={`ml-3 text-white text-xs text-nowrap`}>
                {user.status}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
