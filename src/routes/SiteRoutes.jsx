import "../../src/app.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "../pages/main/Main";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";

const siteRoutes = [
	{ component: <Main />, path: "/" },
	{ component: <Experience />, path: "/experience" },
	{ component: <Projects />, path: "/projects" },
];

const SiteRoutes = () => {
	return (
		<Router>
			<Routes>
				{siteRoutes.map(({ component, path }) => (
					<Route key={path} path={path} element={component} />
				))}
			</Routes>
		</Router>
	);
};

export default SiteRoutes;
