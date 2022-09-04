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
							width: "auto",
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
					I am a 3rd year student studying Software Engineering at the
					University of Guelph who has been programming for 5 years.
					Im a very passionate and hard working individual focusing on
					Frontend developent. Some specifc things I am interested in
					include entrepreneurship and ui/ux/. Currently I am working
					as a React Developer co-op at Sera4, and a part-time
					Frontend Software Developer at TAMVOES Health Inc.
				</p>
			</div>
		</section>
	);
};

export default About;
