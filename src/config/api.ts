import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const api_instance = axios.create({
	baseURL: baseURL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});
