import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { FaInstragram, FaTwitter, FaFacebook } from 'react-icons/fa';
export default class Footer extends Component {
	state = {
		icons: [
			{
				id: 1,
				icon: <FaFacebook className='icon facebook-icon' />,
				path: `http://fb.com`
			},
			{
				id: 2,
				icon: <FaInstragram className='icon instagram-icon' />,
				path: `http://instagram.com`
			},
			{
				id: 3,
				icon: <FaTwitter className='icon twitter-icon' />,
				path: `http://twitter.com`
			}
		]
	};
	render() {
		return (
			<FooterWrapper>
				<div className='title'>Eatery</div>
				<div className='icons'>
					<a href='' />
				</div>
			</FooterWrapper>
		);
	}
}

const FooterWrapper = styled.footer``;
