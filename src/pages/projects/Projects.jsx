import { Container } from "react-bootstrap";

import Header from "../../components/header/Header";
import ProjectsSection from "../../components/projects/projectsSection/ProjectsSection";
import Footer from "../../components/footer/Footer";

const Projects = () => {
	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			<Header />
			<ProjectsSection />
			<Footer />
		</Container>
	);
};

export default Projects;
