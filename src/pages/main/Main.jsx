import Header from "../../components/header/Header";
import LandingHero from "../../components/landinghero/LandingHero";
import { useState, useEffect } from "react";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import { BackgroundLines } from "../../components/animations/BackgroundLines";
import { Container } from "react-bootstrap";
import About from "../../components/about/About";

function Main() {
	const [scrollPos, setScrollPos] = useState(0.0);
	const [reachedBottom, setReachedBottom] = useState(false);
	const [reachedTop, setReachedTop] = useState(false);

	return (
		<Container fluid style={{ padding: "0", margin: "0" }}>
			{/* <BackgroundLines /> */}
			<Header />
			<LandingHero />
			<About />
			<Skills />
			<Contact />
			<Footer />
		</Container>
		// <div className="page-container">
		// 	<div className="lines-wrap">
		// 		<BackgroundLines
		// 			style={{
		// 				width: "100%",
		// 				height: "100%",
		// 			}}
		// 		/>
		// 	</div>
		// 	<Navbar scrollPos={scrollPos} reachedTop={reachedTop} />
		// 	<About scrollPos={scrollPos} />
		// 	{/* <Skills />
		// 	<Projects />
		// 	<Contact /> */}
		// 	<Footer reachedBottom={reachedBottom} />
		// </div>
	);
}

export default Main;
