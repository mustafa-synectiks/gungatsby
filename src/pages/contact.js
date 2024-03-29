import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import img from '../images/bcg/contactBcg.jpeg';

const ContactPage = () => (
	<Layout>
		<SEO title='Contact' keywords={[ `gatsby`, `application`, `react`, `contact` ]} />
		<PageHeader img={img}>
			<Banner title='Contact' subtitle='Contact a professional' />
		</PageHeader>
	</Layout>
);

export default ContactPage;
