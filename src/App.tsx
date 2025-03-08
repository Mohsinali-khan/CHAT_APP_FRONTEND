import { useEffect } from "react";
import Navigation from "./routes";
import { useAuthStore } from "./store/authStore";
import CustomLoader from "./components/CustomLoader";

const App = () => {
	const { checkAuth, authLoading } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, []);

	if (authLoading) return <CustomLoader />;

	return <Navigation />;
};

export default App;
