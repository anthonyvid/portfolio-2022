import "bootstrap/dist/css/bootstrap.min.css";

import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import Routes from "./routes/SiteRoutes";

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes />
		</Suspense>
	);
}

export default App;
