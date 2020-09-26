import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";

const Nav = styled.nav`
	position: absolute;
	z-index: 999;
	display: flex;
	align-items: center;
	color: white;
	ul {
		margin: 0;
		padding: 0;
		display: flex;
		list-style: none;
	}
`;

const Header = () => {
	return (
		<Nav>
			<Logo />
			<ul>
				<li>home</li>
				<li>shop</li>
				<li>about</li>
				<li>contact</li>
			</ul>
		</Nav>
	);
};

export default Header;
