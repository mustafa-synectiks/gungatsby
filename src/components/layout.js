import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/globals/navbar';
import './bootstrap.css';
import './layout.css';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Navbar />
			{children}
		</React.Fragment>
	);
};
const GlobalStyle = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
}

body {
	font-family: opensans;
}
`;

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
