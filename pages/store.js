// @flow

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';

export const Store = (): Element<typeof PageTemplate> => (
	<PageTemplate>
		<Helmet>
			<title>Store | Magna eSports</title>
		</Helmet>
		<InnerContent title='Store' withPadding={true}>
			<p>No items yet. Check back later.</p>
		</InnerContent>
	</PageTemplate>
);

Store.displayName = 'Store';

export default Store;
