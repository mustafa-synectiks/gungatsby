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
				path: '/about/',
				name: 'About',
				sub: [
					{
						id: 1,
						path: '/about/mypage',
						name: 'mypage'
					}
				]
			},
			{
				id: 2,
				path: '/contact/',
				name: 'Contact'
			},
			{
				id: 3,
				path: '/menu/',
				name: 'Menu'
			}
		]
	};
	render() {
		// console.log(this.props.navbarOpen);
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

const LinkWrapper = styled.ul`
	li {
		list-style-type: none;
	}
	.nav-link {
		display: block;
		text-decoration: none;
		padding: 0.5rem 1rem;
		color: ${styles.colors.mainGrey};
		font-weight: 700;
		text-transform: capitalize;
		cursor: pointer;
		${styles.transDefault};
		&:hover {
			background: ${styles.colors.mainGrey};
			color: ${styles.colors.mainYellow};
			padding: 0.5rem 1rem 0.5rem 1.3rem;
		}
	}
	height: ${(props) => (props.open ? '152px' : '0')};
	overflow: hidden;
	${styles.transObject({ time: '0.5s', type: 'linear' })};
	@media (min-width: 768px) {
		height: auto;
		display: flex;
		margin: 0 auto;
		.nav-link:hover {
			background: ${styles.colors.mainWhite};
		}
	}
`;
