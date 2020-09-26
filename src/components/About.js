import React from "react";
import styled from "styled-components";
import img1 from "../images/image-about-dark.jpg";
import img2 from "../images/image-about-light.jpg";

const Wrap = styled.div`
	grid-row: 2;
	display: grid;
	grid-template-columns: 30% 40% 30%;

	img {
		width: 100%;
		height: auto;
		min-height: 100%;
		object-fit: cover;
	}

	.img1 {
		grid-column: 1;
	}

	.text {
		grid-column: 2;
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.img2 {
		grid-column: 3;
	}
`;

const About = () => {
	return (
		<Wrap>
			<img className="img1" src={img1} alt="dark office furniture" />
			<div className="text">
				<h3>ABOUT OUR FURNITURE</h3>
				<p>
					Our multifunctional collection blends design and function to suit your
					individual taste. Make each room unique, or pick a cohesive theme tht
					best express your interests and what inspires you. Find the furniture
					ieces you need, from traditional to contemporary styles or anything in
					between. Product specialists are available to help you create your
					dream space.
				</p>
			</div>

			<img className="img2" src={img2} alt="light office furniture" />
		</Wrap>
	);
};

export default About;
