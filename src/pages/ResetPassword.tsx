import { useEffect, useState } from "react";
import Button from "../components/CustomButton";
import AuthWrapper from "../components/CustomAuthWrapper";
import { useAuthStore } from "../store/authStore";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "lucide-react";
import OTPInput from "react-otp-input";

const ResetPassword = () => {
	const { resetPasswordloading, resetPassword } = useAuthStore();

	const [otp, setOtp] = useState("");
	const [newPassword, setnewPassword] = useState("");

	const location = useLocation();

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { success } = await resetPassword(
			location.state.email,
			newPassword,
			otp
		);
		if (success) {
			navigate("/login");
		}
	};

	useEffect(() => {
		if (!location.state.email) {
			navigate("/login");
		}
	}, [Navigation, location]);

	return (
		<AuthWrapper>
			<form onSubmit={handleSubmit}>
				<h2 className="text-secondary text-center text-2xl mb-6 mt-4">
					Reset your password
				</h2>

				<div className="flex flex-col items-center my-3">
					<span>An OTP for password reset has been emailed to</span>
					<span className="text-primary">{location.state.email}</span>
				</div>

				<OTPInput
					value={otp}
					numInputs={6}
					onChange={setOtp}
					renderSeparator={
						<span className="mx-2 text-lg font-semibold">-</span>
					}
					renderInput={(props) => (
						<input
							{...props}
							className="!w-10 !h-10 text-center border-2 border-gray-300 rounded-lg focus:outline-none  text-lg"
						/>
					)}
				/>

				<div className="my-3">
					<span className="text-xs">New Password</span>
					<input
						onChange={(e) => setnewPassword(e.target.value)}
						type="password"
						className="w-full  border p-2 rounded"
					/>
				</div>

				<div className="mt-5">
					<Button loading={resetPasswordloading} type="submit">
						Reset Password
					</Button>
				</div>
			</form>
		</AuthWrapper>
	);
};

export default ResetPassword;
