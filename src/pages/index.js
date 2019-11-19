import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader } from '../utils';
import imj from '../images/bcg/homeBcg.jpeg';
const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<HomeHeader img={imj}>
			<h1>Hello from Header Home</h1>
		</HomeHeader>
	</Layout>
);

export default IndexPage;
