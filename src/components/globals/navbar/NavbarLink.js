import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { Link } from 'gatsby';
export default class NavbarLink extends Component {
	state = {
		links: [
			{
				id: 0,
				path: '/',
				name: 'Home'
			},
			{
				id: 1,
				path: 'About',
				name: 'About'
			},
			{
				id: 2,
				path: 'Contact',
				name: 'Contact'
			},
			{
				id: 3,
				path: 'Gallery',
				name: 'Gallery'
			}
		]
	};
	render() {
		return (
			<LinkWrapper open={this.props.navbarOpen}>
				{this.state.links.map((item) => {
					return (
						<li key={item.id}>
							<Link to={item.path} className='nav-link'>
								{item.name}
							</Link>
						</li>
					);
				})}
			</LinkWrapper>
		);
	}
}

const LinkWrapper = styled.ul``;
