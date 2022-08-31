import React from "react";
import "./skills.css";
import { skills } from "../../data/data";

function Skills() {
	return (
		<section className="main-section skills-section">
			<div className="section-header">
				<small>Things that I work with</small>
				<div className="d-flex flex-row align-items-center">
					<h1>Skills</h1>
					<hr
						style={{
							width: "auto",
							width: "60px",
							marginLeft: "10px",
							opacity: "1",
							color: "#5f7080",
						}}
					/>
				</div>
			</div>
			<div className="skills-content bg-white">
				{skills.map((skill) => {
					const { id, name, icon, color } = skill;
					const Icon = icon;

					return (
						<div
							className="skill text-white"
							key={id}
							style={{ backgroundColor: `#${color}` }}
						>
							<Icon className="skill-logo" />
							{name}
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Skills;
