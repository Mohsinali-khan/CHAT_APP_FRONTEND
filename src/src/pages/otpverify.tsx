import { useEffect, useState } from "react";
import Button from "../components/CustomButton";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import AuthWrapper from "../components/CustomAuthWrapper";

const OtpVerificationForm = () => {
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

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/login");
    }
  }, [location, navigate])

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit} className="relative rounded-l p-8">
        <h2 className="text-center text-lg font-semibold mb-4">
          Enter OTP Code
        </h2>

        <OtpInput
          value={otp}
          numInputs={6}
          onChange={setOtp} // Explicit handler
          renderSeparator={
            <span className="mx-2 text-lg font-semibold">-</span>
          }
          renderInput={(props) => (
            <input
              {...props}
              className="!w-10 !h-10 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
            />
          )}
        />

        <div className="mt-5">
          <Button loading={verifyOtpLoading} type="submit">
            Verify
          </Button>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default OtpVerificationForm;
