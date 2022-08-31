import React, { useEffect } from "react";
import "./footer.css";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="footer">
			<div className="content-wrap">
				<AiOutlineCopyright />
				<small>Anthony Vidovic</small>
				<small>2022</small>
			</div>
		</div>
	);
};

export default Footer;
