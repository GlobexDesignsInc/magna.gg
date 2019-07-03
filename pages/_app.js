// @flow strict

/* eslint-disable react/jsx-props-no-spreading */

import './_app.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import App, {Container} from 'next/app';
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
import React, {type Element} from 'react';
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
	static async getInitialProps ({Component, ctx, router}: any): {} {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {pageProps};
	}

	componentDidMount () {
		initGA();
		logPageView();

		// flow-disable-next-line
		Router.router.events.on('routeChangeComplete', logPageView);
	}

	render (): Element<typeof Container> {
		const {Component, pageProps} = this.props;
		return (
			<Container>
				<Helmet
					htmlAttributes={{lang: 'en'}}
					meta={DEFAULT_META}
					title={SITE_NAME}
					titleTemplate={`%s | ${SITE_NAME}`} />
				<Component {...pageProps} />
			</Container>
		);
	}
}
