import "./LandingHero.css";

import Pdf from "../../../documents/resume.pdf";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Button } from "react-bootstrap";

const LandingHero = () => {
	return (
		<section className="master-content">
			<div className="hero">
				<div className="avatar">
					<img
						src="/photos/avatar.png"
						alt=""
						style={{ borderRadius: "50%" }}
						width="300"
						height="300"
					/>
				</div>
				<Content />
			</div>
		</section>
	);
};

const Content = () => {
	return (
		<div className="content">
			<div className="wrapper">
				<div className="mobile-avatar">
					<img
						src="/photos/avatar.png"
						alt=""
						style={{ borderRadius: "50%" }}
						width="300"
						height="300"
					/>
				</div>
				<h3>Hello! I'm</h3>
				<h1>
					<strong className="d-none d-lg-flex">
						<span>
							<span className="color-p name-text-effect">
								<p>A</p>
								<p>n</p>
								<p>t</p>
								<p>h</p>
								<p>o</p>
								<p>n</p>
								<p>y</p>
							</span>{" "}
							<span className="name-text-effect">
								<p>V</p>
								<p>i</p>
								<p>d</p>
								<p>o</p>
								<p>v</p>
								<p>i</p>
								<p>c</p>
							</span>
						</span>
					</strong>
					<strong className="d-block d-lg-none">
						<span>
							<span className="color-p">Anthony </span>Vidovic
						</span>
					</strong>
				</h1>
				<br />
				<h3>
					A{" "}
					<strong className="color-p">
						Frontend Software Developer
					</strong>{" "}
					from Canada.
				</h3>
				<div className="d-flex justify-content-between">
					<span>
						<AiFillLinkedin
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/anthonyvidovic/"
								)
							}
							size={45}
							className="social-icon"
						/>
						<AiFillGithub
							onClick={() =>
								window.open("https://github.com/anthonyvid")
							}
							className="social-icon"
							style={{ marginLeft: "10px" }}
							size={45}
						/>
					</span>
					<Button
						className="px-5 fw-300"
						style={{ borderRadius: "50px" }}
						onClick={() => window.open(Pdf)}
					>
						Resume
					</Button>
				</div>
			</div>
		</div>
	);
};

export default LandingHero;
