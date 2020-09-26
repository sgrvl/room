import React from "react";
import styled from "styled-components";
import img1 from "../images/image-about-dark.jpg";
import img2 from "../images/image-about-light.jpg";

const Flex = styled.div``;

const About = () => {
	return (
		<Flex>
			<img src={img1} alt="dark office furniture" />
			<h3>ABOUT OUR FURNITURE</h3>
			<p>
				Our multifunctional collection blends design and function to suit your
				individual taste. Make each room unique, or pick a cohesive theme tht
				best express your interests and what inspires you. Find the furniture
				ieces you need, from traditional to contemporary styles or anything in
				between. Product specialists are available to help you create your dream
				space.
			</p>
			<img src={img2} alt="light office furniture" />
		</Flex>
	);
};

export default About;
