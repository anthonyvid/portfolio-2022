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
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vero deleniti necessitatibus delectus recusandae enim, in
					sed accusamus tempore iste. Alias aspernatur perferendis
					temporibus maxime aperiam dolorum eum quos illum quaerat!
				</p>
			</div>
		</section>
	);
};

export default About;
