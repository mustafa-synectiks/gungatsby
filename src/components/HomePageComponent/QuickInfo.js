import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';
export default class QuickInfo extends Component {
	render() {
		return (
			<div>
				<Section>
					<Title message='let us tell you' title='Our Mission' />
					<QuickInfoWrapper>
						<p className='text'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore est numquam nulla
							vitae laboriosam quam dignissimos alias natus omnis officia quidem amet deserunt eligendi,
							libero, dicta, consequatur voluptatum cumque. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Explicabo quos sint molestias, nemo dolorem labore consequuntur at iste
							voluptate rerum.
						</p>
						<Link to='/about/' style={{ textDecoration: 'none' }}>
							<SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
						</Link>
					</QuickInfoWrapper>
				</Section>
			</div>
		);
	}
}

const QuickInfoWrapper = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text {
		line-height: 2rem;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 992px) {
		width: 60%;
	}
`;
