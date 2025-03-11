import { create } from "zustand";
import { User } from "../types/auth"; // Still importing User type
import { MESSAGE_ENDPOINTS } from "../constants/endpoints";
import { api_instance } from "../config/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface API_Response {
	success: boolean;
	message: string;
	data: {
		users: User[];
	};
}

interface MessageState {
	// Initial States
	AllUsers: User[] | null;

	// Manage loading
	getAllUsersLoading: boolean;

	// Manage functions
	getAllUsers: () => Promise<void>;
}

export const useMessageStore = create<MessageState>((set) => {
	const setLoading = (key: keyof MessageState, value: boolean) =>
		set({ [key]: value });

	const handleError = (error: unknown, defaultMessage: string) => {
		return error instanceof AxiosError
			? error.response?.data?.message || defaultMessage
			: defaultMessage;
	};

	return {
		AllUsers: null,
		getAllUsersLoading: true,

		getAllUsers: async (): Promise<void> => {
			setLoading("getAllUsersLoading", true);
			try {
				const { data } = await api_instance.get<API_Response>(
					MESSAGE_ENDPOINTS.GET_ALL_USERS
				);
				set({
					AllUsers: data.data.users,
				});
			} catch (error) {
				const errMsg = handleError(error, "User not found");
				toast.error(errMsg);
			} finally {
				setLoading("getAllUsersLoading", false);
			}
		},
	};
});
