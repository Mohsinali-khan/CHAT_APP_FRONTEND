import { useState } from "react";
import { MessageSquareMore } from "lucide-react";
import Button from "../components/CustomButton";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassoword = () => {
  const navigate = useNavigate();
  const { verifyOTP, verifyOtpLoading } = useAuthStore();
  const location = useLocation();

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { message, success } = await verifyOTP(
      Number(otp),
      location.state.email
    );
    if (success) {
      toast.success(message);
      navigate("/");
    } else {
      toast.error(message);
    }
  };

  // Prevent access without email in state
  if (!location?.state?.email) {
    navigate("/login");
  }

  return (
    <div className="bg-primary flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white relative rounded-lg shadow-lg p-8 w-100"
      >
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary border-8 text-white rounded-full w-20 h-20 text-lg font-bold flex justify-center items-center">
          <MessageSquareMore className="animate-pulse" size={40} />
        </div>

        <h2 className="text-secondary text-center text-2xl mb-6 mt-4">
          Enter your email
        </h2>
        {/* Fixed OtpInput Component */}
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          type="email"
          placeholder="write an email"
          className="border-secondary border-2 rounded-lg px-4 py-2  w-full"
        />

        <div className="mt-5">
          <Button loading={verifyOtpLoading} type="submit">
            Verify
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassoword;
