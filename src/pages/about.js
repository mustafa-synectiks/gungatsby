import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';

const AboutPage = () => (
	<Layout>
		<SEO title='Home' />
		<PageHeader img={img}>
			<h1>Hello from About Page</h1>
		</PageHeader>
	</Layout>
);

export default AboutPage;
