import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import ShopNow from "./ShopNow";

const GlobalStyle = createGlobalStyle``;

const theme = {
	darkGray: "hsl(0, 0%, 63%)",
	darkerGray: "hsl(0, 0%, 27%)",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ShopNow />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
