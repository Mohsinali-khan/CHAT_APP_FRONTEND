import { MessageSquareMore } from "lucide-react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="bg-primary flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg p-8 shadow-xl relative min-w-sm">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-primary border-8 text-white rounded-full w-24 h-24 text-lg font-bold">
          <div className="flex justify-center items-center my-5">
            <MessageSquareMore className="animate-pulse" size={40} />
          </div>
        </div>
        <div className="px-2" >
        {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
