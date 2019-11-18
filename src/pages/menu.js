import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuPage = () => (
	<Layout>
		<SEO title='Menu' keywords={[ `gatsby`, `application`, `react` ]} />
		<h2>this is menu page</h2>
	</Layout>
);

export default MenuPage;
