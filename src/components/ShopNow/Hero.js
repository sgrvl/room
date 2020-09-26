import React, { useState } from "react";
import styled from "styled-components";
import hero1 from "../../images/desktop-image-hero-1.jpg";
import hero2 from "../../images/desktop-image-hero-2.jpg";
import hero3 from "../../images/desktop-image-hero-3.jpg";

const Image = styled.img``;

const Hero = () => {
	const [hero, setHero] = useState(0);
	const images = [hero1, hero2, hero3];

	const handleSlides = (n) => {
		if (n === 3) setHero(0);
		else if (n === -1) setHero(2);
		else setHero(n);
	};

	return (
		<div>
			<Image src={images[hero]} />
			<button onClick={() => handleSlides(hero - 1)}>Left</button>
			<button onClick={() => handleSlides(hero + 1)}>Right</button>
		</div>
	);
};

export default Hero;
