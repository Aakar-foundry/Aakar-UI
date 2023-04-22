import React from "react";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Employee = React.lazy(() => import("../Pages/Employee/Employee"));

const components = {
    Home: {
		path: "/",
		name: "home",
		element: <Home />,
	},
	Employee: {
		path: "/Employee",
		name: "Employee",
		element:<Employee/>,
	}
}

const rolesConfig = {
	Admin: {
		routes: [
            
		],
	},
	user: {
		routes: [

        ],
	},
};
const BasicRoutesConfig = [
    components.Home, components.Employee
];
export { rolesConfig, BasicRoutesConfig };