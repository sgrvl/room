import React from "react";
import styled from "styled-components";
import hero1 from "../../images/desktop-image-hero-1.jpg";
import hero2 from "../../images/desktop-image-hero-2.jpg";
import hero3 from "../../images/desktop-image-hero-3.jpg";
import mobi1 from "../../images/mobile-image-hero-1.jpg";
import mobi2 from "../../images/mobile-image-hero-2.jpg";
import mobi3 from "../../images/mobile-image-hero-3.jpg";
import Button from "./Button";

const Wrap = styled.div`
	line-height: 0;
	grid-column: 1;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: left;
`;

const Hero = ({ hero, setHero, width }) => {
	const images = [hero1, hero2, hero3];
	const imgMobile = [mobi1, mobi2, mobi3];

	return (
		<Wrap>
			<Image src={width >= 500 ? images[hero] : imgMobile[hero]} />
			{width < 900 && <Button hero={hero} setHero={setHero} mobile={true} />}
		</Wrap>
	);
};

export default Hero;
