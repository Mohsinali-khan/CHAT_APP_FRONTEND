import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "../pages/signup";
import LoginForm from "../pages/login";
import OtpVerificationForm from "../pages/otpverify";
import ChatScreen from "../pages/chat";

const Navigation = () => {
	const navigation_links = [
		{ component: <SignupForm />, path: "/signup" },
		{ component: <LoginForm />, path: "/login" },
		{ component: <OtpVerificationForm />, path: "/verify-otp" },
		{ component: <ChatScreen />, path: "/" },
	];

	return (
		<Router>
			<Routes>
				<Route>
					{navigation_links.map((link, index) => (
						<Route key={index} path={link.path} element={link.component} />
					))}
				</Route>
			</Routes>
		</Router>
	);
};

export default Navigation;
