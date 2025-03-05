import { useState } from "react";
import { User, Lock, MessageSquareMore } from "lucide-react";
import Button from "../components/CustomButton";
import { useAuthStore } from "../store/authStore";

const LoginForm = () => {
	const { loginLoading, login } = useAuthStore();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await login(username, password);
		} catch (error) {
			console.log("error =====> ", error);
		}
	};

	return (
		<div className="bg-primary flex items-center justify-center min-h-screen">
			<div className="bg-white rounded-lg p-8 shadow-xl relative w-80">
				<div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-primary border-8 text-white rounded-full w-24 h-24 text-lg font-bold">
					<div className="flex justify-center items-center my-5">
						<MessageSquareMore className="animate-pulse" size={40} />
					</div>
				</div>
				<h2 className="text-secondary text-center text-2xl mb-6 mt-4">Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<User className="text-secondary" size={20} />
							</span>
							<input
								type="text"
								placeholder="Email..."
								className="pl-10 pr-4 py-2 w-full border rounded-full bg-message-received text-secondary focus:outline-none"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-6">
						<div className="relative">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<Lock className="text-secondary" size={20} />
							</span>
							<input
								type="password"
								placeholder="Password..."
								className="pl-10 pr-4 py-2 w-full border rounded-full bg-message-received text-secondary focus:outline-none"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<Button type="submit">Sign in</Button>
				</form>
				<div className="text-center mt-4">
					<a href="#" className="text-secondary">
						Forgot your password?
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
