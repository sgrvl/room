import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import { ReactComponent as Arrow } from "../../images/icon-arrow.svg";

/* const Test = styled.div`
	color: ${(props) => props.theme.darkerGray};
`; */

const Grid = styled.div`
	display: flex;
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 5rem;
`;

const Link = styled.a`
	text-decoration: none;
	color: black;
	width: max-content;
	cursor: pointer;
`;

const ShopNow = () => {
	return (
		<Grid>
			<Hero />
			<Text>
				<h1>Discover innovative ways to decorate</h1>
				<p>
					We provide unmatched quality, comfort, and style for property owners
					across the country. Our experts combine form and function in bringing
					your vision to life. Create a room in your own style with our
					collection and make your property a reflection of you and what you
					love.
				</p>
				<Link>
					SHOP NOW
					<Arrow />
				</Link>
			</Text>
		</Grid>
	);
};

export default ShopNow;
