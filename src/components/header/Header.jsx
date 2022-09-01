import "./header.css";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { IoShareSocialSharp, IoGitNetworkSharp } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";

const Styles = {
	headerRight: {
		gap: "50px",
		listStyleType: "none",
		fontSize: "17px",
		fontWeight: "bold",
		justifyContent: "between",
		alignItems: "center",
		marginRight: "50px",
	},
	desktopNavbar: {
		color: "white",
		zIndex: "99",
		gap: "25px",
		fontSize: "16px",
		fontWeight: "500",
	},
	mobileNav: {
		width: "100%",
		minHeight: "75px",
		display: "flex",
		gap: "15px",
		paddingLeft: "50px",
		alignItems: "center",
		fontWeight: "bold",
	},
};

const NAV_ITEMS = {
	home: "/",
	experience: "/experience",
	projects: "/projects",
};

function Header() {
	const [activeMenu, setActiveMenu] = useState(false);
	const [currentPage, setCurrentPage] = useState("/");
	const pathname = useLocation().pathname;

	useEffect(() => {
		switch (pathname) {
			case NAV_ITEMS.home:
				setCurrentPage(NAV_ITEMS.home);
				break;
			case NAV_ITEMS.experience:
				setCurrentPage(NAV_ITEMS.experience);
				break;
			case NAV_ITEMS.projects:
				setCurrentPage(NAV_ITEMS.projects);
				break;
			default:
				break;
		}
	}, [pathname, currentPage]);

	return (
		<>
			<Navbar
				style={{
					minHeight: "100px",
					padding: "0",
				}}
				className={`${activeMenu ? "bg-s" : "bg-p"}`}
			>
				<Container
					fluid
					style={{
						padding: "0",
					}}
				>
					<Link
						to="/"
						className="px-4 d-flex align-items-center justify-content-center bg-s"
						style={{
							maxWidth: "100px",
							height: "100px",
						}}
					>
						<img
							src="/logoWhite.png"
							alt="logo"
							width={60}
							height={60}
						/>
					</Link>
					<Nav
						style={Styles.headerRight}
						className="d-none d-lg-flex desktop-nav"
					>
						<Row style={Styles.desktopNavbar}>
							<Col>
								<Nav.Item
									className={`${
										currentPage === NAV_ITEMS.home &&
										"active-nav"
									}`}
								>
									<Link to="/">Home</Link>
								</Nav.Item>
							</Col>
							<Col>
								<Nav.Item
									className={`${
										currentPage === NAV_ITEMS.experience &&
										"active-nav"
									}`}
								>
									<Link to="/experience">Experience</Link>
								</Nav.Item>
							</Col>
							<Col>
								<Nav.Item
									className={`${
										currentPage === NAV_ITEMS.projects &&
										"active-nav"
									}`}
								>
									<Link to="/projects">Projects</Link>
								</Nav.Item>
							</Col>
							{/* <Col>
								<Nav.Item
									className={`${
										activeMenu === "/" && "active-nav"
									}`}
								>
									<Link to="/projects">Projects</Link>
								</Nav.Item>
							</Col> */}
						</Row>
					</Nav>
					<Nav className="d-flex d-lg-none">
						<Row style={{ paddingRight: "25px" }}>
							{!activeMenu ? (
								<GiHamburgerMenu
									className="dropdown-icon"
									size={30}
									color="white"
									onClick={(e) => setActiveMenu(true)}
								/>
							) : (
								<AiOutlineCloseCircle
									className="dropdown-icon"
									size={35}
									color="white"
									onClick={() => setActiveMenu(false)}
								/>
							)}
						</Row>
					</Nav>
				</Container>
			</Navbar>
			<MobileNav show={activeMenu} />
		</>
	);
}

const MobileNav = ({ show }) => {
	show ? disableBodyScroll(document) : enableBodyScroll(document);

	return (
		<Container
			fluid
			className={`${
				show ? "d-flex" : "d-none"
			} flex-column mobile-nav d-lg-none pt-3`}
			style={{
				height: "calc(100vh - 120px)",
			}}
		>
			<Link style={Styles.mobileNav} to="/">
				<HiHome size={35} />
				<span>Home</span>
			</Link>
			<Link style={Styles.mobileNav} to="/experience">
				<IoMdBriefcase size={35} />
				<span>Experience</span>
			</Link>
			<Link style={Styles.mobileNav} to="/projects">
				<IoGitNetworkSharp size={35} />
				<span>Projects</span>
			</Link>
			<Link style={Styles.mobileNav} to="/contact">
				<IoShareSocialSharp size={35} />
				<span>Contact</span>
			</Link>
		</Container>
	);
};

export default Header;
