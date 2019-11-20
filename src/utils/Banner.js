import React from 'react';

import styled from 'styled-components';
import { styles } from '../utils';

export default function Banner({ title, subtitle, children }) {
	return (
		<BannerWrapper>
			<h1 className='title'>{title}</h1>
			<h2 className='sub-title'>{subtitle}</h2>
			{children}
		</BannerWrapper>
	);
}

const BannerWrapper = styled.div`
	margin-bottom: 3rem;
	.title {
		color: ${styles.colors.mainWhite};
		font-size: 3rem;
		text-transform: uppercase;
		${styles.letterSpacing({ spacing: '0.75rem' })};
	}
	.sub-title {
		color: ${styles.colors.mainWhite};
	}
	${styles.textSlanted};
	${styles.letterSpacing({ spacing: '0.7rem' })};
	font-size: 1.5rem;
	text-transform: capitalize;
`;

Banner.defaultProps = {
	title: 'default title'
};
