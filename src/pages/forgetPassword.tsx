import { useState } from "react";
import Button from "../components/CustomButton";
import AuthWrapper from "../components/CustomAuthWrapper";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const ForgetPassoword = () => {
	const { forgetPassword, forgetPasswordloading } = useAuthStore();
	const [email, setemail] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { success } = await forgetPassword(email);
		if (success) {
			navigate("/reset-password", {
				state: {
					email,
				},
			});
		}
	};

	return (
		<AuthWrapper>
			<form onSubmit={handleSubmit}>
				<h2 className="text-secondary text-center text-2xl mb-6 mt-4">
					Enter your email
				</h2>
				{/* Fixed emailInput Component */}
				<input
					value={email}
					onChange={(e) => setemail(e.target.value)}
					required
					type="email"
					placeholder="write an email"
					className="border-secondary border-2 rounded-lg px-4 py-2  w-full"
				/>

				<div className="mt-5">
					<Button loading={forgetPasswordloading} type="submit">
						Verify
					</Button>
				</div>
			</form>
		</AuthWrapper>
	);
};

export default ForgetPassoword;
