import { useState } from "react";
import { MessageSquareMore, ShieldCheck } from "lucide-react";
import Button from "../components/CustomButton";

const OtpVerificationForm = () => {
	const [otp, setOtp] = useState(["", "", "", ""]);

	const handleChange = (index: number, value: string) => {
		if (!isNaN(Number(value)) && value.length <= 1) {
			const newOtp = [...otp];
			newOtp[index] = value;
			setOtp(newOtp);
		}
	};

	return (
		<div className="bg-primary flex items-center justify-center min-h-screen">
			<div className="bg-white relative rounded-lg shadow-lg p-8 w-80">
				<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary border-8 text-white rounded-full w-20 h-20 text-lg font-bold">
					<div className="flex justify-center items-center my-3">
						<MessageSquareMore className="animate-pulse" size={40} />
					</div>
				</div>
				<h2 className="text-center text-lg font-semibold mb-4">
					Enter OTP Code
				</h2>
				<div className="flex justify-between mb-6">
					{otp.map((digit, index) => (
						<input
							key={index}
							type="text"
							maxLength={1}
							className="w-12 h-12 border border-gray-300 rounded text-center text-lg"
							value={digit}
							onChange={(e) => handleChange(index, e.target.value)}
						/>
					))}
				</div>

				<Button type="submit">Verify OTP</Button>
			</div>
		</div>
	);
};

export default OtpVerificationForm;
