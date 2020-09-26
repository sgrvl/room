import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";

const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

const List = styled.ul`
	display: flex;
	list-style: none;
`;

const Header = () => {
	return (
		<Nav>
			<Logo />
			<List>
				<li>home</li>
				<li>shop</li>
				<li>about</li>
				<li>contact</li>
			</List>
		</Nav>
	);
};

export default Header;
