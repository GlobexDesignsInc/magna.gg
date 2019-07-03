// @flow strict

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import Match from '../components/Match';
import PageTemplate from '../containers/PageTemplate';

export const Matches = (): Element<typeof PageTemplate> => (
	<PageTemplate>
		<Helmet>
			<title>Matches | Magna eSports</title>
		</Helmet>
		<InnerContent title='Matches' withPadding={true}>
			<h3>Upcoming</h3>

			<p>No upcoming matches</p>

			<h3>Past</h3>

			<Match
				date='May 25, 2019'
				event='NCS Minor | Overwatch: Philadelphia, PA'
				place={2}
				team='magna' />
			<Match
				date='Apr 2019'
				event='2019 Overwatch Open Division Season 2'
				place={25}
				team='ignis' />
			<Match
				date='Apr 2019'
				event='2019 Overwatch Open Division Season 2'
				place={33}
				team='terra' />
			<Match
				date='Apr 2019'
				event='2019 Overwatch Open Division Season 2'
				place={57}
				team='ventus' />
			<Match
				date='Dec 2018'
				event='2019 Overwatch Open Division Season 1'
				place={98}
				team='ignis' />
			<Match
				date='Dec 2018'
				event='2019 Overwatch Open Division Season 1'
				place={113}
				team='ventus' />
			<Match
				date='Dec 2018'
				event='2019 Overwatch Open Division Season 1'
				place={132}
				team='terra' />
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

Matches.displayName = 'Matches';

export default Matches;
