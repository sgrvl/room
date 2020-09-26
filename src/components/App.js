import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ShopNow from "./ShopNow/ShopNow";
import Header from "./Header";
import About from "./About";

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 12px;
		font-family: 'Spartan', sans-serif;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	h1,h3 {
		margin: 0;
	}

	p {
		line-height: 1.25rem;
	}

	#root {
		height: 100vh;
		display: grid;
		grid-template-rows: 70% 30%;
	}
`;

const theme = {
	darkGray: "hsl(0, 0%, 63%)",
	darkerGray: "hsl(0, 0%, 27%)",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<ShopNow />
			<About />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
