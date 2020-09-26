import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ShopNow from "./ShopNow/ShopNow";
import Header from "./Header";
import About from "./About";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
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
