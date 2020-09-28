import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../images/icon-angle-left.svg";
import { ReactComponent as ArrowRight } from "../../images/icon-angle-right.svg";

const BtnWrap = styled.div`
	display: none;
	position: absolute;
	bottom: 0;
	@media screen and (min-width: 900px) {
		left: 0;
	}
	right: 0;
	width: 25%;
	background-color: black;
	display: flex;
	justify-content: space-around;

	button {
		background-color: transparent;
		border: none;
		border-radius: none;
		cursor: pointer;
		outline: none;
		box-sizing: border-box;
		padding: 1rem 1rem;
	}
`;

const Button = ({ hero, setHero }) => {
	const handleSlides = (n) => {
		if (n === 3) setHero(0);
		else if (n === -1) setHero(2);
		else setHero(n);
	};
	return (
		<BtnWrap>
			<button
				onClick={() => {
					handleSlides(hero - 1);
				}}
			>
				<ArrowLeft />
			</button>
			<button
				onClick={() => {
					handleSlides(hero + 1);
				}}
			>
				<ArrowRight />
			</button>
		</BtnWrap>
	);
};

export default Button;
