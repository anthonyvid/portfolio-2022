import "./projectssection.css";

import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { Carousel } from "react-bootstrap";

import { projects } from "../../../data/data";

function ProjectsSection() {
	return (
		<section className="main-section mt-5">
			<div className="section-header">
				<div className="d-flex flex-row align-items-center">
					<small>Check out my</small>
					<hr
						style={{
							width: "45px",
							marginLeft: "10px",
							opacity: "1",
							color: "#5f7080",
						}}
					/>
				</div>
				<h1>Projects</h1>
			</div>
			<div
				className="projects-content bg-white d-flex flex-column"
				style={{ gap: "30px" }}
			>
				{projects.map((p) => {
					return (
						<div
							key={p.id}
							className="d-flex bg-white w-100 h-100 project"
							style={{ gap: "25px" }}
						>
							<h4 className="mobile-project-title d-none">
								{p.title}
							</h4>
							<p className="mobile-project-description d-none">
								{p.description}
							</p>
							<div className="w-50 left-side">
								<Carousel>
									{p.photos.map((p, i) => {
										return (
											<Carousel.Item
												key={i}
												interval={4000}
											>
												<img
													src={p}
													alt="project slide"
													style={{
														width: "100%",
														borderRadius: "15px",
														boxShadow:
															"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
													}}
												/>
											</Carousel.Item>
										);
									})}
								</Carousel>
							</div>
							<div className="w-50 right-side">
								<h4 className="project-title">{p.title}</h4>
								<p className="description">{p.description}</p>
								<div
									className="d-flex flex-wrap mb-4"
									style={{ gap: "10px" }}
								>
									{p.stack.map((t, i) => {
										return (
											<div
												key={i}
												style={{
													padding: "5px",
													width: "fit-content",
													backgroundColor: `#${t[1]}`,
													color: "white",
													borderRadius: "7px",
													fontSize: "13px",
												}}
												className="technology"
											>
												{t[0]}
											</div>
										);
									})}
								</div>
								<div className="points">
									{p.points.map((point, i) => {
										return (
											<li
												key={i}
												style={{ marginBottom: "10px" }}
											>
												{point}
											</li>
										);
									})}
								</div>
								<div className="d-flex" style={{ gap: "10px" }}>
									{p.links[0].length && (
										<AiFillGithub
											size={35}
											className="social-icon"
											onClick={() =>
												window.open(p.links[0])
											}
										/>
									)}
									{p.links[1].length > 0 && (
										<BiLinkExternal
											size={35}
											className="social-icon"
											onClick={() =>
												window.open(p.links[1])
											}
										/>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default ProjectsSection;
