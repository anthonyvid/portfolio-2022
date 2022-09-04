import "./contact.css";

import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

function Contact() {
	const form = useRef();
	const contactSection = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [emailSent, setEmailSent] = useState(false);

	const location = useLocation();

	useEffect(() => {
		if (location.hash === "#contact")
			contactSection.current.scrollIntoView({ behavior: "smooth" });
	});

	const isValidEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!name || !email || !subject || !message) {
			setErrorMsg("Please fill out required fields.");
			return;
		}

		if (!isValidEmail(email)) {
			setErrorMsg("Please enter a valid email address.");
			return;
		}

		setErrorMsg("");

		emailjs
			.sendForm(
				"service_shpn9t4",
				"template_bexjb2c",
				form.current,
				"ndEFbYhMVZKfvICZO"
			)
			.then(
				(result) => {
					setName("");
					setEmail("");
					setSubject("");
					setMessage("");
					setEmailSent(true);
					setInterval(() => {
						setEmailSent(false);
					}, 3000);
				},
				(error) => {
					setErrorMsg(error.text);
					setEmailSent(false);
				}
			);
	};

	return (
		<section ref={contactSection} className="main-section">
			<div className="section-header">
				<div className="d-flex flex-row align-items-center">
					<small>Say Hi</small>
					<hr
						style={{
							width: "auto",
							width: "90px",
							marginLeft: "10px",
							opacity: "1",
							color: "#5f7080",
						}}
					/>
				</div>
				<h1>Contact</h1>
			</div>
			<form ref={form} onSubmit={sendEmail}>
				<div className="contact-content bg-white">
					<h4>Contact Form</h4>
					<div className="d-flex flex-column" style={{ gap: "30px" }}>
						<div
							className="d-flex mobile-form-row"
							style={{ gap: "25px" }}
						>
							<input
								className={`w-50 form-control ${
									name.length && "input-active"
								}`}
								type="text"
								value={name}
								name="from_name"
								placeholder="Name *"
								onInput={(e) => setName(e.target.value)}
							/>
							<input
								className={`w-50 form-control ${
									email.length && "input-active"
								}`}
								type="text"
								value={email}
								placeholder="Email *"
								onInput={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<input
								name="subject"
								value={subject}
								className={`w-100 form-control ${
									subject.length && "input-active"
								}`}
								type="text"
								placeholder="Subject *"
								onInput={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div>
							<textarea
								name="message"
								className={`w-100 form-control ${
									name.length && "input-active"
								}`}
								cols="30"
								rows="10"
								placeholder="Message *"
								onInput={(e) => setMessage(e.target.value)}
								value={message}
							></textarea>
						</div>
						<div className="text-center text-danger">
							<p style={{ fontSize: "13px" }}>{errorMsg}</p>
						</div>
						<div className="d-flex justify-content-center">
							<Button
								className="px-5 fw-300 d-flex align-items-center"
								style={{
									borderRadius: "50px",
									padding: "10px",
								}}
								type="submit"
							>
								SUBMIT
								<span>
									{!emailSent ? (
										<BsArrowRightShort size={30} />
									) : (
										<AiFillCheckCircle size={30} />
									)}
								</span>
							</Button>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Contact;
