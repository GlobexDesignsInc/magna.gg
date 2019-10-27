// @flow strict

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';
import Team from '../components/Team';

export const Teams = (): Element<typeof PageTemplate> => (
	<PageTemplate>
		<Helmet>
			<title>Teams | Magna eSports</title>
		</Helmet>
		<InnerContent withPadding={true}>
			<Team team='terra' />
		</InnerContent>
	</PageTemplate>
);

Teams.displayName = 'Teams';

export default Teams;
