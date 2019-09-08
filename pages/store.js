// @flow strict

/* eslint-disable max-len */

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import MerchItem from '../components/MerchItem';
import PageTemplate from '../containers/PageTemplate';
import styles from './store.css';

export const Store = (): Element<typeof PageTemplate> => (
	<PageTemplate>
		<Helmet>
			<title>Merchandise Store | Magna eSports</title>
		</Helmet>
		<InnerContent title='Merchandise Store' withPadding={true}>
			<p>Our merchandise store is managed by <a href='https://sbs-streetwear.myshopify.com/'>SBS Streetwear</a> and powered by <a href='https://www.shopify.ca'>Shopify</a>. When you select an item below you will be redirected to a third-party website to complete your order.</p>

			<div className={styles.items}>
				<MerchItem
					imageUrl='https://cdn.shopify.com/s/files/1/0039/4215/4275/products/mockup-f5ecd655_960x.jpg'
					name='Magna Esports T-Shirt'
					url='https://sbs-streetwear.myshopify.com/collections/magna/products/magna-flame-logo-t-shirt' />
				<MerchItem
					imageUrl='https://cdn.shopify.com/s/files/1/0039/4215/4275/products/mockup-5a133af8_960x.jpg'
					name='Magna Esports Ignis T-Shirt'
					url='https://sbs-streetwear.myshopify.com/collections/magna/products/magna-esports-ignis-shirt' />
				<MerchItem
					imageUrl='https://cdn.shopify.com/s/files/1/0039/4215/4275/products/mockup-a18a7f01_960x.jpg'
					name='Magna Esports Ventus T-Shirt'
					url='https://sbs-streetwear.myshopify.com/collections/magna/products/magna-esports-ventus-shirt' />
				<MerchItem
					imageUrl='https://cdn.shopify.com/s/files/1/0039/4215/4275/products/mockup-b19e0dab_960x.jpg'
					name='Magna Esports Terra T-Shirt'
					url='https://sbs-streetwear.myshopify.com/collections/magna/products/magna-esports-terra-shirt' />
				<MerchItem
					imageUrl='https://cdn.shopify.com/s/files/1/0039/4215/4275/products/mockup-c8865c8c_960x.jpg'
					name='Magna Esports Sweatshirt'
					url='https://sbs-streetwear.myshopify.com/collections/magna/products/magna-flame-logo-sweatshirt' />
			</div>
		</InnerContent>
	</PageTemplate>
);

Store.displayName = 'Store';

export default Store;
