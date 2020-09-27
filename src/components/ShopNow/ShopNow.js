import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import { ReactComponent as Arrow } from "../../images/icon-arrow.svg";
import Button from "./Button";

const Grid = styled.div`
	@media screen and (min-width: 900px) {
		grid-row: 1;
		display: grid;
		grid-template-columns: 60% 40%;

		.text {
			grid-column: 2;
			position: relative;
			padding: 5rem !important;
		}
	}
	display: flex;
	flex-direction: column;

	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 3rem 2rem;
	}

	h1 {
		font-size: 2.25em;
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

const ShopNow = ({ width }) => {
	const [hero, setHero] = useState(0);

	return (
		<Grid>
			<Hero hero={hero} setHero={setHero} width={width} />
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
				{width >= 900 && <Button hero={hero} setHero={setHero} />}
			</div>
		</Grid>
	);
};

export default ShopNow;
