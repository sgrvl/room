import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ShopNow from "./ShopNow/ShopNow";
import Header from "./Header/Header";
import About from "./About";

const GlobalStyle = createGlobalStyle`
	body {
		position: relative;
		font-size: 12px;
		font-family: 'Spartan', sans-serif;
		margin: 0;
		padding: 0;	
	}

	h1,h3 {
		margin: 0;
	}

	p {
		line-height: 1.25rem;
	}

	@media screen and (min-width: 900px) {
		#root {
			height: 100vh;
			overflow: hidden;
			display: grid;
		grid-template-rows: 70% 30%;
		}
	}
`;

const theme = {
	darkGray: "hsl(0, 0%, 63%)",
	darkerGray: "hsl(0, 0%, 27%)",
};

function App() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () =>
			window.removeEventListener("resize", () => setWidth(window.innerWidth));
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Header width={width} />
			<ShopNow width={width} />
			<About />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
