import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarIcons from './NavbarIcons';
import NavbarLink from './NavbarLink';
import styled from 'styled-components';
export default class navbar extends Component {
	state = {
		navbarOpen: false
	};
	handleNavbar = () => {
		this.setState(() => {
			return {
				navbarOpen: !this.state.navbarOpen
			};
		});
	};

	render() {
		return (
			<NavWrapper>
				<NavbarHeader handleNavbar={this.handleNavbar} />
				<NavbarLink />
				<NavbarIcons navbarOpen={this.state.navbarOpen} />
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
	}
`;
