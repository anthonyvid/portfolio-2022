import Header from "../../components/header/Header";
import LandingHero from "../../components/landinghero/LandingHero";
import Skills from "../../components/skills/Skills";

import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import { Container } from "react-bootstrap";
import About from "../../components/about/About";

function Main() {
	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			<Header />
			<LandingHero />
			<About />
			<Skills />
			<Contact />
			<Footer />
		</Container>
	);
}

export default Main;
