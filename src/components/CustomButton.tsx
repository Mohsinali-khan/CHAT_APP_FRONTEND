import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	children,
	className = "",
	onClick,
	loading = false,
}) => {
	return (
		<button
			type={type}
			className={`w-full bg-primary text-white py-2 rounded-full text-lg flex items-center justify-center gap-2 disabled:opacity-50 ${className}`}
			onClick={onClick}
			disabled={loading}
		>
			{loading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
		</button>
	);
};

export default Button;
