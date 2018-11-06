// @flow

import './_app.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import App, {Container} from 'next/app';
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
		Router.router.events.on('routeChangeComplete', logPageView);
	}

	render (): Element<typeof Container> {
		const {Component, pageProps} = this.props;
		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}
