import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

export default class NavbarIcons extends Component {
	state = {
		icons: [
			{
				id: 1,
				icon: <FaFacebookSquare className='icon facebook-icon' />,
				path: 'https://fb.com'
			},
			{
				id: 2,
				icon: <FaTwitterSquare className='icon twitter-icon' />,
				path: 'https://twitter.com'
			},
			{
				id: 3,
				icon: <FaInstagram className='icon instagram-icon' />,
				path: 'https://instagram.com'
			}
		]
	};
	render() {
		return (
			<IconWrapper>
				{this.state.icons.map((item) => {
					return (
						<a href={item.path} key={item.id} target='_blank' rel='noopener noreferrer'>
							{item.icon}
						</a>
					);
				})}
			</IconWrapper>
		);
	}
}

const IconWrapper = styled.div`
	.icon {
		font-size: 1.3rem;
		cursor; pointer;
		${styles.transFunction()};
	}
	.facebook-icon{
		color: #3b579d;
	}
	.twitter-icon{
		color:#3ab7f0;
	}
	.instagram-icon{
		color:#da5f53;
	}
	.icon:hover{
		color:${styles.colors.mainYellow};
	}
	display:none;
	@media(min-width:768px){
		display:flex;
		width:10rem;
		justify-content: space-around;
	}
`;
