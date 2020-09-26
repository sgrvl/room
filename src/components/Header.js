import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";

const Nav = styled.nav`
	position: absolute;
	z-index: 999;
	top: 7.5%;
	left: 5%;
	display: flex;
	align-items: center;

	svg {
		margin-right: 3rem;
		cursor: pointer;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		list-style: none;
	}

	li {
		margin: 0 1rem;
		cursor: pointer;
		color: white;

		&:hover {
			color: black;
		}
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
