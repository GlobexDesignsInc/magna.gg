// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import './_app.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {DEFAULT_META, SITE_NAME} from '../constants/seo';
import {
	faAward,
	faComments,
	faTrophy,
	faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faInstagram,
	faTwitch,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {initGA, logPageView} from '../utils/analytics';
import React, {type Element, Fragment} from 'react';
import App from 'next/app';
import {Helmet} from 'react-helmet';
import {library} from '@fortawesome/fontawesome-svg-core';
import Router from 'next/router';

// Load Font Awesome icons
library.add(
	faFacebook,
	faInstagram,
	faTwitch,
	faTwitter,
	faYoutube,

	faAward,
	faComments,
	faTrophy,
	faUserFriends
);

export default class MyApp extends App {
	componentDidMount () {
		initGA();
		logPageView();

		// flow-disable-next-line
		Router.router.events.on('routeChangeComplete', logPageView);
	}

	render (): Element<typeof Fragment> {
		const {Component, pageProps} = this.props;
		return (
			<Fragment>
				<Helmet
					htmlAttributes={{lang: 'en'}}
					meta={DEFAULT_META}
					title={SITE_NAME}
					titleTemplate={`%s | ${SITE_NAME}`} />
				<Component {...pageProps} />
			</Fragment>
		);
	}
}
