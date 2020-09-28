import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Hamburger } from "../../images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../images/icon-close.svg";
import List from "./List";

const Nav = styled.nav`
	box-sizing: border-box;
	position: absolute;
	z-index: 999;
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: center;
	width: 100%;
	top: 0;
	background-color: ${(props) => (props.open ? "white" : "transparent")};
	padding: 3rem 3rem;

	.menu {
		position: absolute;
		top: 3rem;
		left: 2rem;
		cursor: pointer;
	}

	@media screen and (min-width: 900px) {
		justify-content: start;
		top: 7.5%;
		padding-left: 5%;
		flex-direction: row;

		svg {
			margin-right: 3rem;
		}

		ul {
			padding: 0 !important;
			width: initial !important;
			justify-content: start !important;
		}

		li {
			color: white !important;
			margin: 0 1rem;
		}
	}

	svg {
		cursor: pointer;
	}

	ul {
		margin: 0;
		padding: 2px 0 0 1rem;
		width: 100%;
		display: flex;
		list-style: none;
		justify-content: space-around;
	}

	li {
		cursor: pointer;
		color: black;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Header = ({ width }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			{/* isOpen && <Whiteblock /> */}
			<Nav open={isOpen && width < 900}>
				{(!isOpen || width >= 900) && <Logo />}
				{width >= 900 ? (
					<List />
				) : isOpen ? (
					<>
						<Close className="menu" onClick={() => setOpen(false)} />
						<List />
					</>
				) : (
					<Hamburger className="menu" onClick={() => setOpen(true)} />
				)}
			</Nav>
		</>
	);
};

export default Header;
