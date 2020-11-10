import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light" style={{ marginBottom: 50 }}>
			<a className="navbar-brand" href="#">
				Navbar
				<span className="badge badge-pill badge-secondary m-2"></span>
			</a>
		</nav>
	);
};

export default NavBar;
