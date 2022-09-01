import { Container } from "react-bootstrap";

import Header from "../../components/header/Header";

import Footer from "../../components/footer/Footer";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = () => {
	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			<Header />

			<Footer />
		</Container>
	);
};

export default Projects;
