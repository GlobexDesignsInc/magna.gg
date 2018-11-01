// @flow

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';

export const Events = (): Element<'div'> => (
	<PageTemplate>
		<Helmet>
			<title>Events | Magna eSports</title>
		</Helmet>
		<InnerContent>
			Events
		</InnerContent>
	</PageTemplate>
);

Events.displayName = 'Events';

export default Events;
