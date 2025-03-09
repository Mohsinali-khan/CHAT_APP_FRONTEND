import { create } from "zustand";
import { AUTH_ENDPOINTS } from "../constants/endpoints";
import { api_instance } from "../config/api";
import { AuthResponse, User } from "../types/auth";
import { AxiosError } from "axios";

interface AuthState {
	user: User | null;
	isAuthenticate: boolean;
	message: string | null;

	// Manage loading states
	loginLoading: boolean;
	signupLoading: boolean;
	logoutLoading: boolean;
	authLoading: boolean;
	verifyOtpLoading: boolean;

	// manage functions
	login: (
		email: string,
		password: string
	) => Promise<{ success: boolean; message: string }>;
	verifyOTP: (
		otp: number,
		email: string
	) => Promise<{ success: boolean; message: string }>;
	signup: (
		username: string,
		email: string,
		password: string
	) => Promise<{ success: boolean; message: string }>;
	logout: () => Promise<{ success: boolean; message: string }>;
	checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => {
	const handleError = (error: unknown, defaultMessage: string) => {
		return error instanceof AxiosError
			? error.response?.data?.message || defaultMessage
			: defaultMessage;
	};

	const setLoading = (key: keyof AuthState, value: boolean) =>
		set({ [key]: value });

	return {
		// initial states
		user: null,
		isAuthenticate: false,
		message: null,
		loginLoading: false,
		signupLoading: false,
		logoutLoading: false,
		authLoading: true,
		verifyOtpLoading: false,

		login: async (email, password) => {
			setLoading("loginLoading", true);
			try {
				const { data } = await api_instance.post<AuthResponse>(
					AUTH_ENDPOINTS.LOGIN,
					{ email, password }
				);
				set({
					user: data.data.user,
					isAuthenticate: true,
					message: data.message,
				});
				return { success: true, message: data.message || "Login successful!" };
			} catch (error) {
				return { success: false, message: handleError(error, "Login failed") };
			} finally {
				setLoading("loginLoading", false);
			}
		},

		signup: async (username, email, password) => {
			setLoading("signupLoading", true);
			try {
				const { data } = await api_instance.post<AuthResponse>(
					AUTH_ENDPOINTS.SIGNUP,
					{ username, email, password }
				);
				set({
					user: data.data.user,
					isAuthenticate: true,
					message: data.message,
				});
				return { success: true, message: data.message || "Signup successful!" };
			} catch (error) {
				return { success: false, message: handleError(error, "Signup failed") };
			} finally {
				setLoading("signupLoading", false);
			}
		},

		verifyOTP: async (otp, email) => {
			setLoading("verifyOtpLoading", true);
			try {
				const { data } = await api_instance.post<AuthResponse>(
					AUTH_ENDPOINTS.VERIFY_OTP,
					{ otp, email }
				);
				set({
					user: data.data.user,
					isAuthenticate: true,
					message: data.message,
				});
				return {
					success: true,
					message: data.message || "OTP Verified successfully!",
				};
			} catch (error) {
				return {
					success: false,
					message: handleError(error, "Verify OTP failed"),
				};
			} finally {
				setLoading("verifyOtpLoading", false);
			}
		},

		logout: async () => {
			setLoading("logoutLoading", true);
			try {
				await api_instance.get(AUTH_ENDPOINTS.LOGOUT);
				set({ user: null, isAuthenticate: false, message: null });
				return { success: true, message: "Logged out successfully!" };
			} catch (error) {
				return { success: false, message: handleError(error, "Logout failed") };
			} finally {
				setLoading("logoutLoading", false);
			}
		},

		checkAuth: async () => {
			setLoading("authLoading", true);
			try {
				const { data } = await api_instance.get(AUTH_ENDPOINTS.CHECK_AUTH);
				set({
					isAuthenticate: true,
					user: data.data.user,
					message: data.message,
				});
			} catch (error) {
				console.log("error", error);
				set({
					user: null,
					isAuthenticate: false,
					message: handleError(error, "Session expired, please login again!"),
				});
			} finally {
				setLoading("authLoading", false);
			}
		},
	};
});
