export type User = {
	username: string;
	email: string;
	profilePic: string;
	otpVerified: boolean;
	_id: string;
	__v: number;
};

export type API_Response = {
	success: boolean;
	message: string;
	data: {
		user: User;
	};
};

export type AxiosErrorResponse = {
	response?: {
		data: {
			message: string;
		};
	};
};
