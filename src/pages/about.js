import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
	<Layout>
		<SEO title='About' keywords={[ `gatsby`, `application`, `react` ]} />
		<h2>this is about page</h2>
	</Layout>
);

export default AboutPage;
