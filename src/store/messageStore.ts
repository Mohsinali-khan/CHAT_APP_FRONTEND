import { create } from "zustand";
import { User } from "../types/auth";
import { MESSAGE_ENDPOINTS } from "../constants/endpoints";
import { api_instance } from "../config/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { API_Response, Message, MessageResponse } from "../types/chat";

interface MessageState {
	AllUsers: User[] | null;
	selectedUser: User | null;
	messages: Message[] | null;
	getAllUsersLoading: boolean;
	selectedUserLoading: boolean;
	sendMessageLoading: boolean;

	getAllUsers: () => Promise<void>;
	getCurrentUserMessages: (
		id: string
	) => Promise<{ message: string; success: boolean }>;
	sendMessage: (msg: string) => Promise<{ message: string; success: boolean }>;
	clearSelectedUser: () => void; // Added cleanup function
}

export const useMessageStore = create<MessageState>((set, get) => {
	const setLoading = (key: keyof MessageState, value: boolean) =>
		set({ [key]: value });

	const handleError = (error: unknown, defaultMessage: string): string => {
		if (error instanceof AxiosError) {
			return error.response?.data?.message || defaultMessage;
		}
		console.error("Unexpected error:", error); // Added logging
		return defaultMessage;
	};

	// Input validation helper
	const validateMessage = (msg: string): boolean => {
		return typeof msg === "string" && msg.trim().length > 0;
	};

	return {
		AllUsers: null,
		getAllUsersLoading: false,
		selectedUserLoading: false, // Changed default to false
		sendMessageLoading: false,
		selectedUser: null,
		messages: null,

		getAllUsers: async () => {
			setLoading("getAllUsersLoading", true);
			try {
				const { data } = await api_instance.get<API_Response>(
					MESSAGE_ENDPOINTS.GET_ALL_USERS,
					{ timeout: 10000 } // Added timeout
				);
				set({ AllUsers: data.data.users });
			} catch (error) {
				const errMsg = handleError(error, "Failed to fetch users");
				toast.error(errMsg);
				throw new Error(errMsg); // Added throw for better error propagation
			} finally {
				setLoading("getAllUsersLoading", false);
			}
		},

		getCurrentUserMessages: async (id: string) => {
			if (!id) {
				toast.error("User ID is required");
				return { message: "User ID is required", success: false };
			}

			setLoading("selectedUserLoading", true);
			try {
				const { AllUsers } = get();
				const foundUser = AllUsers?.find((user) => user._id === id);

				if (!AllUsers) {
					throw new Error("Please fetch users first");
				}
				if (!foundUser) {
					throw new Error("User not found");
				}

				set({ selectedUser: foundUser });
				const { data } = await api_instance.get<MessageResponse>(
					`${MESSAGE_ENDPOINTS.GET_SELECTED_USER_MSG}${id}`,
					{ timeout: 10000 }
				);

				set({ messages: data.data });
				return {
					success: data.success,
					message: data.message || "Messages fetched successfully",
				};
			} catch (error) {
				const errMsg = handleError(error, "Failed to fetch messages");
				toast.error(errMsg);
				return { message: errMsg, success: false };
			} finally {
				setLoading("selectedUserLoading", false);
			}
		},

		sendMessage: async (msg: string) => {
			if (!validateMessage(msg)) {
				toast.error("Message cannot be empty");
				return { message: "Message cannot be empty", success: false };
			}

			const { selectedUser } = get();
			if (!selectedUser?._id) {
				toast.error("No user selected");
				return { message: "No user selected", success: false };
			}

			setLoading("sendMessageLoading", true);
			try {
				const { data } = await api_instance.post<MessageResponse>(
					`${MESSAGE_ENDPOINTS.SEND_MESSAGE}${selectedUser._id}`,
					{ text: msg.trim() },
					{ timeout: 10000 }
				);

				return {
					success: data.success,
					message: data.message || "Message sent successfully",
				};
			} catch (error) {
				const errMsg = handleError(error, "Failed to send message");
				toast.error(errMsg);
				return { message: errMsg, success: false };
			} finally {
				setLoading("sendMessageLoading", false);
			}
		},

		// Added cleanup function
		clearSelectedUser: () => {
			set({
				selectedUser: null,
				messages: null,
				selectedUserLoading: false,
			});
		},
	};
});
