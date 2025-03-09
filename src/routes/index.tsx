import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
	Link,
} from "react-router-dom";
import SignupForm from "../pages/signup";
import LoginForm from "../pages/login";
import OtpVerificationForm from "../pages/otpverify";
import ForgetPassoword from "../pages/forgetPassword";
import { useAuthStore } from "../store/authStore";
import ChatScreen from "../pages/chat/ChatScreen";
import { MessageCircleMore } from "lucide-react";

const Navigation = () => {
	const { isAuthenticate } = useAuthStore();

	const navigation_links = [
		{ component: <SignupForm />, path: "/signup", label: "Sign Up" },
		{ component: <LoginForm />, path: "/login", label: "Login" },
		{
			component: <OtpVerificationForm />,
			path: "/verify-otp",
			label: "Verify OTP",
		},
		{ component: <ChatScreen />, path: "/", label: "Chat", isProtected: true },
		{
			component: <ForgetPassoword />,
			path: "/forget-password",
			label: "Forgot Password",
		},
	];

	const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
		return isAuthenticate ? children : <Navigate to="/login" />;
	};

	return (
		<Router>
			{/* Navbar */}

			{/* Routes */}
			<Routes>
				{navigation_links.map((link, index) => (
					<Route
						key={index}
						path={link.path}
						element={
							link.isProtected ? (
								<ProtectedRoute>{link.component}</ProtectedRoute>
							) : (
								link.component
							)
						}
					/>
				))}
			</Routes>
		</Router>
	);
};

export default Navigation;
