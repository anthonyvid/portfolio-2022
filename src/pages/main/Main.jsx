import Header from "../../components/header/Header";
import LandingHero from "../../components/landinghero/LandingHero";
import Skills from "../../components/skills/Skills";

import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import { Container } from "react-bootstrap";
import About from "../../components/about/About";

import { AnimationOnScroll } from "react-animation-on-scroll";

function Main() {
	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			<Header />
			<LandingHero />
			<AnimationOnScroll
				initiallyVisible={false}
				animateIn="animate__lightSpeedInLeft"
				animateOnce
			>
				<About />
			</AnimationOnScroll>
			<AnimationOnScroll
				initiallyVisible={false}
				animateIn="animate__lightSpeedInRight"
				animateOnce
			>
				<Skills />
			</AnimationOnScroll>
			<AnimationOnScroll
				initiallyVisible={false}
				animateIn="animate__zoomInUp"
				animateOnce
			>
				<Contact />
			</AnimationOnScroll>
			<Footer />
		</Container>
	);
}

export default Main;
