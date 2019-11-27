import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import QuickInfo from '../components/HomePageComponent/QuickInfo';
import Gallery from '../components/HomePageComponent/Gallery';
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
		<QuickInfo />
		<Gallery />
	</Layout>
);

export default IndexPage;
