import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import SignupForm from "../pages/signup";
import LoginForm from "../pages/login";
import OtpVerificationForm from "../pages/otpverify";
import ForgetPassoword from "../pages/forgetPassword";
import { useAuthStore } from "../store/authStore";
import ChatScreen from "../pages/chat/ChatScreen";
import { MessageCircleMore } from "lucide-react";

const Navigation = () => {
	const navigation_links = [
		{ component: <SignupForm />, path: "/signup" },
		{ component: <LoginForm />, path: "/login" },
		{ component: <OtpVerificationForm />, path: "/verify-otp" },
		{ component: <ChatScreen />, path: "/", isProtected: false },
		{ component: <ForgetPassoword />, path: "/forget-password" },
	];

	const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
		const { isAuthenticate } = useAuthStore();
		return isAuthenticate ? children : <Navigate to="/login" />;
	};

	return (
		<Router>
			<Routes>
				<Route>
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
				</Route>
			</Routes>
		</Router>
	);
};

export default Navigation;
