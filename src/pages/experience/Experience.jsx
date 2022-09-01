import { Container } from "react-bootstrap";

import Header from "../../components/header/Header";
import Jobs from "../../components/experience/jobs/Jobs";
import WorkTermReports from "../../components/experience/worktermreports/WorkTermReports";
import Footer from "../../components/footer/Footer";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Experience = () => {
	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			<Header />
			<Jobs />

			<AnimationOnScroll
				initiallyVisible={false}
				animateIn="animate__lightSpeedInLeft"
				animateOnce
			>
				<WorkTermReports />
			</AnimationOnScroll>

			<Footer />
		</Container>
	);
};

export default Experience;
