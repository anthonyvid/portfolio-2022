import React, { useRef } from "react";
import "./skills.css";
import { skills } from "../../data/data";

import { Container, Row } from "react-bootstrap";

function Skills() {
	const skillsSection = useRef(null);

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
					SKILLS
				</h2>
				<small
					style={{
						fontSize: "12px",
						letterSpacing: "2px",
						color: "#5f7080",
						marginTop: "-10px",
					}}
				>
					THINGS THAT I USE
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
				{skills.map((skill) => {
					const { id, name, icon, color } = skill;
					const Icon = icon;

					return (
						<div
							className="skill"
							key={id}
							style={{ backgroundColor: `#${color}` }}
							data-aos="zoom-in"
						>
							<Icon className="skill-logo" />
							{name}
						</div>
					);
				})}
			</Row>
		</Container>
	);
}

export default Skills;
