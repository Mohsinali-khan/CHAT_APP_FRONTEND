import { User, Lock } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/CustomButton";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/CustomAuthWrapper";

// Validation schema using Yup
const loginSchema = Yup.object().shape({
	username: Yup.string().required("Username is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});

const SignupForm = () => {
	const { signupLoading, signup } = useAuthStore();
	const navigate = useNavigate();

	const initialValues = {
		username: "",
		email: "",
		password: "",
	};

	const handleSubmit = async (
		values: typeof initialValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		const { success, message } = await signup(
			values.username,
			values.email,
			values.password
		);

		console.log("Message ====> ", message);
		if (success) {
			toast.success(message);
			navigate("/verify-otp", { state: { email: values.email } });
		} else {
			toast.error(message);
		}
		setSubmitting(false);
	};

	return (
		<AuthWrapper>
			<div className="mb-4">
				<h2 className="text-secondary text-center text-md">Welcome Back</h2>
				<h2 className="text-secondary text-center text-md">
					Sign In to Your Account
				</h2>
			</div>
			<Formik
				initialValues={initialValues}
				validationSchema={loginSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="mb-4">
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<User className="text-secondary" size={20} />
								</span>
								<Field
									type="text"
									name="username"
									placeholder="Username..."
									className="pl-10 pr-4 py-2 w-full border rounded-full bg-message-received text-secondary focus:outline-none"
								/>
							</div>
							<ErrorMessage
								name="username"
								component="div"
								className="text-red-500 text-xs ms-3 mt-1"
							/>
						</div>
						<div className="mb-4">
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="text-secondary" size={20} />
								</span>
								<Field
									type="email"
									name="email"
									placeholder="Email..."
									className="pl-10 pr-4 py-2 w-full border rounded-full bg-message-received text-secondary focus:outline-none"
								/>
							</div>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-xs ms-3 mt-1"
							/>
						</div>
						<div className="mb-4">
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="text-secondary" size={20} />
								</span>
								<Field
									type="password"
									name="password"
									placeholder="Password..."
									className="pl-10 pr-4 py-2 w-full border rounded-full bg-message-received text-secondary focus:outline-none"
								/>
							</div>
							<ErrorMessage
								name="password"
								component="div"
								className="text-red-500 text-xs ms-3 mt-1"
							/>
						</div>
						<Button loading={signupLoading || isSubmitting} type="submit">
							Login
						</Button>

						<Link to="/login">
							<div className="my-1 ms-3">
								<span className="text-secondary  cursor-pointer text-sm underline hover:text-primary ">
									Already have an account?{" "}
								</span>
							</div>
						</Link>
					</Form>
				)}
			</Formik>
		</AuthWrapper>
	);
};

export default SignupForm;
