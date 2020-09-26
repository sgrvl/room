import React from "react";
import styled from "styled-components";
import hero1 from "../../images/desktop-image-hero-1.jpg";
import hero2 from "../../images/desktop-image-hero-2.jpg";
import hero3 from "../../images/desktop-image-hero-3.jpg";

const Wrap = styled.div`
	line-height: 0;
	grid-column: 1;
`;

const Image = styled.img`
	width: auto;
	max-width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Hero = ({ hero }) => {
	const images = [hero1, hero2, hero3];

	return (
		<Wrap>
			<Image src={images[hero]} />
		</Wrap>
	);
};

export default Hero;
