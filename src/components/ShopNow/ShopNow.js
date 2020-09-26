import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import { ReactComponent as Arrow } from "../../images/icon-arrow.svg";
import { ReactComponent as ArrowLeft } from "../../images/icon-angle-left.svg";
import { ReactComponent as ArrowRight } from "../../images/icon-angle-right.svg";

/* const Test = styled.div`
	color: ${(props) => props.theme.darkerGray};
`; */

const Grid = styled.div`
	grid-row: 1;
	display: grid;
	grid-template-columns: 60% 40%;

	.text {
		grid-column: 2;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 5rem;
	}

	h1 {
		font-size: 2.5em;
	}

	p {
		padding: 1rem 0;
	}

	.link {
		font-weight: 700;
		letter-spacing: 0.5rem;
		text-decoration: none;
		color: black;
		width: max-content;

		svg {
			padding-left: 1rem;
			transition: 0.3s;
		}

		&:hover svg {
			transform: translateX(1rem);
		}
	}
`;

const BtnWrap = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 25%;
	background-color: black;
	padding: 1rem 0;
	display: flex;
	justify-content: space-around;

	button {
		background-color: transparent;
		border: none;
		border-radius: none;
		cursor: pointer;
		outline: none;
	}
`;

const ShopNow = () => {
	const [hero, setHero] = useState(0);
	const handleSlides = (n) => {
		if (n === 3) setHero(0);
		else if (n === -1) setHero(2);
		else setHero(n);
	};
	return (
		<Grid>
			<Hero hero={hero} />
			<div className="text">
				<h1>Discover innovative ways to decorate</h1>
				<p>
					We provide unmatched quality, comfort, and style for property owners
					across the country. Our experts combine form and function in bringing
					your vision to life. Create a room in your own style with our
					collection and make your property a reflection of you and what you
					love.
				</p>
				<a href="/" className="link">
					<span>SHOP NOW</span>
					<Arrow />
				</a>
				<BtnWrap>
					<button onClick={() => handleSlides(hero - 1)}>
						<ArrowLeft />
					</button>
					<button onClick={() => handleSlides(hero + 1)}>
						<ArrowRight />
					</button>
				</BtnWrap>
			</div>
		</Grid>
	);
};

export default ShopNow;
