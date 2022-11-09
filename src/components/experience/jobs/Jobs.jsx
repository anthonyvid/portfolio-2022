import "./jobs.css";
import { jobs } from "../../../data/data";

import React from "react";

const Jobs = () => {
	return (
		<section className="main-section mt-5">
			<div className="section-header">
				<div className="d-flex flex-row align-items-center">
					<small>Check out my</small>
					<hr
						style={{
							width: "70px",
							marginLeft: "10px",
							opacity: "1",
							color: "#5f7080",
						}}
					/>
				</div>
				<h1>Experience</h1>
			</div>
			<div className="jobs-content bg-white">
				{jobs.map((job) => (
					<Job key={job.id} job={job} />
				))}
			</div>
		</section>
	);
};

const Job = ({ job }) => {
	return (
		<>
			<div className="job d-flex flex-column w-100">
				<div className="d-flex justify-content-between align-items-center job-header">
					<h4>
						<a href={job.website} target="_blank" rel="noreferrer">
							{job.company}
						</a>
					</h4>
					<div>
						<p className="date">{`${job.fromDate} - ${job.toDate}`}</p>
						<p
							className="location"
							style={{
								float: "right",
								marginTop: "-17px",
							}}
						>
							{job.location}
						</p>
					</div>
				</div>
				<div className="job-timeline-mobile d-none">
					<p className="date">{`${job.fromDate} - ${job.toDate}`}</p>
					<p
						className="location"
						style={{
							float: "right",
							marginTop: "-17px",
						}}
					>
						{job.location}
					</p>
				</div>
				{job?.newRoles &&
					job.newRoles.map((j, i) => {
						return (
							<div key={i}>
								<div>
									<p className="position">
										{j?.role || job?.position}
									</p>
									<p className="type">{j.type}</p>
								</div>
								<div
									style={{
										borderLeft: "2px solid lightgray",
										width: "100%",
										height: "45px",
										marginLeft: "15px",
										marginTop: "-10px",
										marginBottom: "5px",
									}}
								></div>
							</div>
						);
					})}
				<p className="position">{job.position}</p>
				<p className="type">{job.type}</p>
				<ul className="tasks">
					{job.tasks &&
						job.tasks.map((task, i) => {
							return <li key={i}>{task}</li>;
						})}
				</ul>
			</div>
			{!job.last && (
				<div
					className="d-flex align-items-center my-4 w-100"
					style={{ borderTop: "1px solid lightgray" }}
				></div>
			)}
		</>
	);
};

export default Jobs;
