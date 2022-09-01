import { Container } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Header from "../../components/header/Header";
import LandingHero from "../../components/main/landinghero/LandingHero";
import About from "../../components/main/about/About";
import Skills from "../../components/main/skills/Skills";
import Contact from "../../components/main/contact/Contact";
import Footer from "../../components/footer/Footer";
import Education from "../../components/main/education/Education";

const Main = () => {
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
				animateIn="animate__lightSpeedInLeft"
				animateOnce
			>
				<Education />
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
};

export default Main;
