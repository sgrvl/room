import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";

const Nav = styled.nav`
	box-sizing: border-box;
	position: absolute;
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 3%;
	padding-left: 3%;

	@media screen and (min-width: 900px) {
		justify-content: flex-start;
		top: 7.5%;
		padding-left: 5%;
	}

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

const Header = ({ width }) => {
	return (
		<Nav>
			<Logo />
			{width >= 900 && (
				<ul>
					<li>home</li>
					<li>shop</li>
					<li>about</li>
					<li>contact</li>
				</ul>
			)}
		</Nav>
	);
};

export default Header;
