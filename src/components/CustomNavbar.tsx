import { MessageCircleMore } from "lucide-react";

const CustomNavbar = () => {
	return (
		<div>
			<nav className="  flex flex-row justify-between items-center bg-primary py-3 px-8">
				<div className="">
					<MessageCircleMore color="white" />
				</div>
				<div className="space-x-3">
					<span>Profile</span>
					<span>Setting</span>
					<span>logout</span>
				</div>
			</nav>
			;
		</div>
	);
};

export default CustomNavbar;
