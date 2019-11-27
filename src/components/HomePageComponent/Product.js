import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import Img from 'gatsby-image';

export default function Product({ product }) {
	const { name, price, ingredients } = product;
	const { fixed } = product.img;

	return (
		<ProductWrapper>
			<Img fixed={fixed} className='img' />
		</ProductWrapper>
	);
}

const ProductWrapper = styled.div``;
