import React, { useRef } from "react";
import "./skills.css";
import { skills } from "../../data/data";

import { Container, Row, Col } from "react-bootstrap";

function Skills() {
	return (
		<Container
			fluid
			className="d-flex flex-column"
			style={{
				margin: "0 0 250px 0",
				padding: "0 150px 0 150px",
				height: "auto",
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
					minHeight: "300px",
					height: "auto",
					width: "100%",
					borderRadius: "50px",
					padding: "50px",
				}}
				className="bg-white"
			>
				<div class="container">
					<div class="row row-cols-2 row-cols-lg-5 g-lg-3">
						{skills.map((skill) => {
							const { id, name, icon, color } = skill;
							const Icon = icon;

							return (
								<Col
									className="col-6 skill"
									key={id}
									style={{
										backgroundColor: `#${color}`,
										borderRadius: "25px",
									}}
								>
									<div
										style={{
											height: "125px",
											fontWeight: "600",
											fontSize: "16px",
											padding: "15px",
										}}
										className="d-flex flex-column justify-content-center align-items-center text-white text-center"
									>
										<Icon
											style={{
												width: "100%",
												height: "50%",
											}}
										/>
										{name}
									</div>
								</Col>
							);
						})}
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default Skills;
