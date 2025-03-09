import { ChevronDown, Loader2, PowerCircleIcon } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CustomProfileMenu = () => {
  const navigate = useNavigate();
  const { logout, logoutLoading, user } = useAuthStore();

  const hnadleLogout = async () => {
    const { success, message } = await logout();
    if (success) {
      toast.success(message);
      navigate("/login");
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="relative inline-block group">
      <div className="w-52 h-14 bg-primary rounded mb-2 cursor-pointer">
        <div className="p-2 flex flex-row justify-start items-center gap-2">
          <div>
            <img
              className="w-10 h-10 rounded-2xl"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
            />
          </div>
          <div className="flex gap-1">
            <span className="text-white">Hi, {user?.username  || "User" }</span>
            <ChevronDown color="white" size={25} />
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-full flex flex-col p-2 w-52 bg-primary rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white cursor-pointer hover:bg-opacity-80 p-2 rounded">
          Account Setting
        </span>
        <span
          onClick={() => hnadleLogout()}
          className="text-white flex flex-row justify-start items-start cursor-pointer hover:bg-opacity-80 p-2 rounded"
        >
          <>{logoutLoading ? <Loader2 size={20} color="red" className="me-2" /> : <PowerCircleIcon size={20} color="red" className="me-2" />}</>
          Logout
        </span>
      </div>
    </div>
  );
};

export default CustomProfileMenu;
