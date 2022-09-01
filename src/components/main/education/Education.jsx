import "./education.css";

import React from "react";
import { educations } from "../../../data/data";

const Education = () => {
	return (
		<section className="main-section">
			<div className="section-header">
				<div className="d-flex flex-row align-items-center">
					<small>learn about my</small>
					<hr
						style={{
							width: "auto",
							width: "55px",
							marginLeft: "10px",
							opacity: "1",
							color: "#5f7080",
						}}
					/>
				</div>
				<h1>Education</h1>
			</div>
			<div className="education-content bg-white">
				{educations.map((e) => {
					return <School key={e.id} e={e} />;
				})}
			</div>
		</section>
	);
};

const School = ({ e }) => {
	return (
		<>
			<div className="education d-flex flex-column w-100">
				<div className="d-flex justify-content-between align-items-center education-header">
					<h4>{e.school}</h4>
					<div>
						<p className="date">{`${e.fromDate} - ${e.toDate}`}</p>
						<p
							className="location"
							style={{
								float: "right",
								marginTop: "-17px",
							}}
						>
							{e.location}
						</p>
					</div>
				</div>
				<div className="education-timeline-mobile d-none">
					<p className="date">{`${e.fromDate} - ${e.toDate}`}</p>
					<p
						className="location"
						style={{
							float: "right",
							marginTop: "-17px",
						}}
					>
						{e.location}
					</p>
				</div>
				{e.program && <p className="program">{e.program}</p>}
			</div>
			{!e.last && (
				<div
					className="d-flex align-items-center my-4 w-100"
					style={{ borderTop: "1px solid lightgray" }}
				></div>
			)}
		</>
	);
};

export default Education;
