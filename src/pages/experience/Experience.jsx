import React from "react";
import Header from "../../components/header/Header";
import Jobs from "../../components/experience/jobs/Jobs";
import WorkTermReports from "../../components/experience/worktermreports/WorkTermReports";
import Footer from "../../components/footer/Footer";

import { Container } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = () => {
	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			<Header />
			<Jobs />
			<WorkTermReports />
			<Footer />
		</Container>
	);
};

export default Experience;
