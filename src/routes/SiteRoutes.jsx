import "../../src/app.css";

import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Main = lazy(() => import("../pages/main/Main"));

const siteRoutes = [{ component: <Main />, path: "/" }];

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
