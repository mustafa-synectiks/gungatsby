import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../utils';
import img from '../images/bcg/contactBcg.jpeg';

const ContactPage = () => (
	<Layout>
		<SEO title='Contact' keywords={[ `gatsby`, `application`, `react`, `contact` ]} />
		<PageHeader img={img}>
			<h1>Contact page</h1>
		</PageHeader>
	</Layout>
);

export default ContactPage;
