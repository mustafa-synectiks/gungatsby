import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../utils';
import img from '../images/bcg/menuBcg.jpeg';
const MenuPage = () => (
	<Layout>
		<SEO title='Menu' keywords={[ `gatsby`, `application`, `react` ]} />
		<PageHeader img={img}>
			<h2>this is menu page</h2>
		</PageHeader>
	</Layout>
);

export default MenuPage;
