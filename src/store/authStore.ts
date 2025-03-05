import { create } from "zustand";
import { AUTH_ENDPOINTS } from "../constants/endpoints";
import { api_instance } from "../config/api";
import toast from "react-hot-toast";

interface User {
	id: string;
	email: string;
}

interface AuthState {
	user: User | null;
	message: string | null;

	// Loading states
	loginLoading: boolean;
	signupLoading: boolean;
	logoutLoading: boolean;
	authLoading: boolean;

	// Actions
	login: (email: string, password: string) => Promise<void>;
	signup: (username: string, email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	message: null, // Initialize message state

	loginLoading: false,
	signupLoading: false,
	logoutLoading: false,
	authLoading: false,

	login: async (email, password) => {
		set({ loginLoading: true, message: null });
		try {
			const { data } = await api_instance.post(AUTH_ENDPOINTS.LOGIN, {
				email,
				password,
			});
			set({ user: data.user, message: data.message });
			toast.success(data.message || "Login successful!");
		} catch (err: any) {
			const errorMessage = err.response?.data?.message || "Login failed";
			toast.error(errorMessage);
			throw new Error(errorMessage);
		} finally {
			set({ loginLoading: false });
		}
	},

	signup: async (username, email, password) => {
		set({ signupLoading: true, message: null });
		try {
			const { data } = await api_instance.post(AUTH_ENDPOINTS.SIGNUP, {
				username,
				email,
				password,
			});
			set({ user: data.data.user, message: data.message }); // Save message
			toast.success(data.message || "Signup successful!");
		} catch (err: any) {
			const errorMessage = err.response?.data?.message || "Signup failed";
			toast.error(errorMessage);
			throw new Error(errorMessage);
		} finally {
			set({ signupLoading: false });
		}
	},

	logout: async () => {
		set({ logoutLoading: true, message: null });
		try {
			const { data } = await api_instance.post(AUTH_ENDPOINTS.LOGOUT);
			set({ user: null, message: data.message }); // Save message
			toast.success(data.message || "Logged out successfully!");
		} catch (err: any) {
			const errorMessage = err.response?.data?.message || "Logout failed";
			toast.error(errorMessage);
			throw new Error(errorMessage);
		} finally {
			set({ logoutLoading: false });
		}
	},

	checkAuth: async () => {
		set({ authLoading: true, message: null });
		try {
			const { data } = await api_instance.get(AUTH_ENDPOINTS.CHECK_AUTH);
			set({ user: data.user, message: data.message }); // Save message
		} catch (err: any) {
			const errorMessage = "Session expired, please login again!";
			toast.error(errorMessage);
			set({ user: null, message: errorMessage });
		} finally {
			set({ authLoading: false });
		}
	},
}));
