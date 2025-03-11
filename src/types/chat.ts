import { User } from "./auth";

export interface API_Response {
	success: boolean;
	message: string;
	data: {
		users: User[];
	};
}

export interface Message {
	_id: string;
	senderId: string;
	receiverId: string;
	text: string;
	createdAt: string;
	updatedAt: string;
}

export interface MessageResponse {
	success: boolean;
	message: string;
	data: any[];
}
