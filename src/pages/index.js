import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader, Banner, BannerButton } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<HomeHeader img={img}>
			<Banner title='Eatery' subtitle='Los Angels'>
				<BannerButton style={{ margin: '2rem auto' }}>Menu</BannerButton>
			</Banner>
		</HomeHeader>
	</Layout>
);

export default IndexPage;
