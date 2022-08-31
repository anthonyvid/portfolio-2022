import "./about.css";

import React from "react";
import { Container, Row } from "react-bootstrap";

const About = () => {
	return (
		<Container
			fluid
			className="d-flex flex-column"
			style={{
				margin: "0",
				padding: "0 150px 0 150px",
				height: "750px",
				gap: "60px",
			}}
		>
			<Row className="section-head">
				<h2
					style={{ letterSpacing: "2px", fontSize: "1.7rem" }}
					className="fw-500"
				>
					ABOUT ME
				</h2>
				<small
					style={{
						fontSize: "12px",
						letterSpacing: "2px",
						color: "#5f7080",
						marginTop: "-10px",
					}}
				>
					WHO AM I?
				</small>
			</Row>
			<Row
				style={{
					height: "auto",
					borderRadius: "50px",
					padding: "50px",
				}}
				className="bg-white"
			>
				<p
					style={{
						lineHeight: "1.7",
						fontSize: "18px",
						fontWeight: "500",
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatibus, suscipit quis enim tempora obcaecati qui
					quisquam quidem tempore eligendi ea cumque minus accusamus
					repudiandae culpa distinctio. Facere inventore aliquam odio.
					Voluptatibus, suscipit quis enim tempora obcaecati qui
					quisquam quidem tempore eligendi ea cumque minus accusamus
					repudiandae culpa distinctio. Facere inventore aliquam odio.
					Voluptatibus, suscipit quis enim tempora obcaecati qui
					quisquam quidem tempore eligendi ea cumque minus accusamus
					repudiandae culpa distinctio. Facere inventore aliquam odio.
				</p>
			</Row>
		</Container>
	);
};

export default About;
