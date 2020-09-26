import React, { useState } from "react";
import styled from "styled-components";
import hero1 from "../../images/desktop-image-hero-1.jpg";
import hero2 from "../../images/desktop-image-hero-2.jpg";
import hero3 from "../../images/desktop-image-hero-3.jpg";
import { ReactComponent as ArrowLeft } from "../../images/icon-angle-left.svg";
import { ReactComponent as ArrowRight } from "../../images/icon-angle-right.svg";

const Wrap = styled.div`
	line-height: 0;
	position: relative;
`;

const Image = styled.img``;

const BtnWrap = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: black;
	padding: 1rem;
	transform: translateX(100%);

	button {
		background-color: transparent;
		border: none;
		border-radius: none;
		cursor: pointer;
		outline: none;

		&:first-child {
			margin-right: 1rem;
		}

		&:last-child {
			margin-left: 1rem;
		}
	}
`;

const Hero = () => {
	const [hero, setHero] = useState(0);
	const images = [hero1, hero2, hero3];

	const handleSlides = (n) => {
		if (n === 3) setHero(0);
		else if (n === -1) setHero(2);
		else setHero(n);
	};

	return (
		<Wrap>
			<Image src={images[hero]} />
			<BtnWrap>
				<button onClick={() => handleSlides(hero - 1)}>
					<ArrowLeft />
				</button>
				<button onClick={() => handleSlides(hero + 1)}>
					<ArrowRight />
				</button>
			</BtnWrap>
		</Wrap>
	);
};

export default Hero;
