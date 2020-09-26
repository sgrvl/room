import React from "react";
import styled from "styled-components";

const Test = styled.div`
	color: ${(props) => props.theme.darkerGray};
`;

const ShopNow = () => {
	return <Test>hello world</Test>;
};

export default ShopNow;
