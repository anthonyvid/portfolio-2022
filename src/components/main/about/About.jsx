import "./about.css";

import React from "react";

const About = () => {
	return (
		<section className="main-section">
			<div className="section-header">
				<div className="d-flex flex-row align-items-center">
					<small>Who am I?</small>
					<hr
						style={{
							width: "70px",
							marginLeft: "10px",
							opacity: "1",
							color: "#5f7080",
						}}
					/>
				</div>
				<h1>About Me</h1>
			</div>
			<div className="about-content bg-white">
				<p>
					Hello there! My name is Anthony and I am a 3rd year software
					engineering student at the University of Guelph. I have a
					passion for creating intuitive and engaging user experiences
					through frontend development. While I specialize in frontend
					development, I also have a strong foundation in backend
					programming. My goal is to combine my technical skills with
					my creativity to build impactful and visually stunning
					projects. When I'm not coding, I enjoy playing soccer
					and exploring new technologies. Thank you for visiting my
					personal website and I hope you enjoy my work!
				</p>
			</div>
		</section>
	);
};

export default About;
