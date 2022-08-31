import "./footer.css";

import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
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
