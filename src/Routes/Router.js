import React from "react";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
const RFQForm = React.lazy(() => import("../Pages/RFQForm/RFQForm"))
const Login = React.lazy(() => import("../Pages/Login/Login"))
const Register = React.lazy(() => import("../Pages/Register/Register"))
const Marketing = React.lazy(() => import("../Pages/Marketing/Marketing"))
const Designing = React.lazy(() => import("../Pages/Designing/Designing"))
const Management = React.lazy(() => import("../Pages/Marketing/Marketing"))
const Packaging_Logistics = React.lazy(() => import("../Pages/Packaging_Logistic/Packaging_Logistic"))
const Admin = React.lazy(() => import("../Pages/Admin/Admin"))
const Quality = React.lazy(() => import("../Pages/Quality/Quality"))
const Machinery = React.lazy(() => import("../Pages/Machinery/Machinery"))
const Foundary = React.lazy(() => import("../Pages/Foundary/Foundary"))
const Home = React.lazy(() => import("../Pages/Home/Home"));
const Employee = React.lazy(() => import("../Pages/Employee/Employee"));


const components = {

	Home: {
		path: "/base/home",
		name: "home",
		element: <Home />,
	},
	Login: {
		path: "/login",
		name: "Login",
		element: <Login />,
	},
	Register: {
		path: "/register",
		name: "Register",
		element: <Register />,
	},
	Employee: {
		path: "/base/employee",
		name: "Employee",
		element: <Employee />,
	},
	Admin: {
		path: "/base/admin",
		name: "Admin",
		element: <Admin />,
	},
	Quality: {
		path: "/base/quality",
		name: "Quality",
		element: <Quality />,
	},
	Machinery: {
		path: "/base/machinery",
		name: "Machinery",
		element: <Machinery />,
	},
	Marketing: {
		path: "/base/marketing",
		name: "Marketing",
		element: <Marketing />,
	},
	Foundary: {
		path: "/base/foundary",
		name: "Foundary",
		element: <Foundary />,
	},
	Designing: {
		path: "/base/designing",
		name: "Designing",
		element: <Designing />,
	},
	Management: {
		path: "/base/management",
		name: "Management",
		element: <Management />,
	},
	Packaging_Logistic: {
		path: "/base/packaging_Logistic",
		name: "Packaging_Logistic",
		element: <Packaging_Logistics />,
	},
	RFQForm: {
		path: "/base/RFQForm",
		name: "RFQForm",
		element: <RFQForm />,
	},
	ForgotPassword: {
		path: "/forgotPassword",
		name: "ForgotPassword",
		element: <ForgotPassword />,
	},
}

const rolesConfig = {
	Admin: {
		routes: [
			components.Home,
			components.Employee,
			components.Designing,
			components.Foundary,
			components.Management,
			components.Marketing,
			components.Packaging_Logistic,
			components.Admin,
			components.Quality,
			components.Management,
			components.Machinery,
			components.RFQForm,

		],
	},
	user: {
		routes: [
			components.Home,
			components.Employee,
			components.Designing,
			components.Foundary,
			components.Management,
			components.Marketing,
			components.Packaging_Logistic,
			components.Admin,
			components.Quality,
			components.Management,
			components.Machinery,
			components.RFQForm
		],
	},
};
const BasicRoutesConfig = [	
	components.Login,
	components.Register,
	components.ForgotPassword
];
export { rolesConfig, BasicRoutesConfig };