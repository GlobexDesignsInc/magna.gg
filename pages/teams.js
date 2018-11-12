// @flow

import React, {type Element} from 'react';
import {Helmet} from 'react-helmet';
import InnerContent from '../components/InnerContent';
import PageTemplate from '../containers/PageTemplate';
import Team from '../components/Team';

export const Teams = (): Element<'div'> => (
	<PageTemplate>
		<Helmet>
			<title>Teams | Magna eSports</title>
		</Helmet>
		<InnerContent withPadding={true}>
			<Team team='ignis' />
			<Team team='ventus' />
		</InnerContent>
	</PageTemplate>
);

Teams.displayName = 'Teams';

export default Teams;
