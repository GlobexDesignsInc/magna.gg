// @flow

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';

export const Store = (): Element<'div'> => (
	<PageTemplate>
		<Helmet>
			<title>Store | Magna eSports</title>
		</Helmet>
		<InnerContent>
			Store
		</InnerContent>
	</PageTemplate>
);

Store.displayName = 'Store';

export default Store;
