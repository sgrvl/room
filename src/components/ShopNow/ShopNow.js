import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

/* const Test = styled.div`
	color: ${(props) => props.theme.darkerGray};
`; */

const Grid = styled.div``;

const Link = styled.a`
	text-decoration: none;
	color: black;
`;

const ShopNow = () => {
	return (
		<Grid>
			<Hero />
			<div>
				<h1>Discover innovative ways to decorate</h1>
				<p>
					We provide unmatched quality, comfort, and style for property owners
					across the country. Our experts combine form and function in bringing
					your vision to life. Create a room in your own style with our
					collection and make your property a reflection of you and what you
					love.
				</p>
				<Link>SHOP NOW</Link>
			</div>
		</Grid>
	);
};

export default ShopNow;
