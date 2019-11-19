import React from 'react';
import styled from 'styled-components';
function HomeHeader({ img, children }) {
	return <IndexHeader img={img}>{children}</IndexHeader>;
}

const IndexHeader = styled.header`
	min-height: calc(100vh - 97.78px);
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url(${(props) => props.img}) center/cover fixed no-repeat;
`;
export { HomeHeader };
