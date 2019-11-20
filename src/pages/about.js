import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';

const AboutPage = () => (
	<Layout>
		<SEO title='Home' />
		<PageHeader img={img}>
			<Banner title='About Us' subtitle='Know ME Who Im' />
		</PageHeader>
	</Layout>
);

export default AboutPage;
