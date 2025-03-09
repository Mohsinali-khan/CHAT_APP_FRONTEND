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
  onClick,
  loading = false,
}) => {
  return (
    <button
      className="before:ease flex justify-center items-center relative h-12  overflow-hidden border border-primary rounded-full w-full bg-primary text-white  transition-all before:absolute before:right-0 before:top-0 before:h-32 before:w-6 before:translate-x-32 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-90"
      type={type}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
    </button>
  );
};

export default Button;
