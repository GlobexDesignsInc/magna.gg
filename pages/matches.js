// @flow

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import Match from '../components/Match';
import PageTemplate from '../containers/PageTemplate';

export const Events = (): Element<typeof PageTemplate> => (
	<PageTemplate>
		<Helmet>
			<title>Matches | Magna eSports</title>
		</Helmet>
		<InnerContent title='Matches' withPadding={true}>
			<h3>Upcoming</h3>

			<p>No upcoming matches</p>

			<h3>Past</h3>

			<Match
				date='Nov 10-11, 2018'
				event='Fusion Overwatch Showcase in Philadelphia'
				team='magna' />

			<Match
				date='Oct 27, 2018'
				event='OTC Overtime Champions Season 6'
				place={2}
				team='ventus' />
		</InnerContent>
	</PageTemplate>
);

Events.displayName = 'Events';

export default Events;
