// @flow

import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import Helmet from 'react-helmet';

type PropsType = {};

const SITE_AUTHOR = 'Ev Haus';
const SITE_NAME = 'Magna eSports: Semi-pro Overwatch organization';
const SITE_DESC = 'Magna eSports is a Tier 2 Overwatch organization with two teams (Ignis & Ventus) competing in the Open Division, OTC, WarpMeta and other tournaments & leagues.';
const TWITTER_USER = '@MagnaEsportsOW';

const DEFAULT_META = [
	{charSet: 'utf-8'},
	{content: 'ie=edge', httpEquiv: 'x-ua-compatible'},
	{name: 'viewport', content: 'width=device-width,initial-scale=1,shrink-to-fit=no'},

	{content: SITE_NAME, name: 'application-name'},
	{content: SITE_DESC, name: 'description-name'},
	{content: 'next.js', name: 'generator'},
	{content: 'General', name: 'rating'},
	{content: '#222', name: 'theme-color'},

	{content: SITE_AUTHOR, property: 'article:author'},
	{content: SITE_DESC, property: 'og:description'},
	{content: 'en_US', property: 'og:locale'},
	{content: SITE_NAME, property: 'og:site_name'},
	{content: SITE_NAME, property: 'og:title'},
	{content: 'website', property: 'og:type'},

	{content: 'summary', property: 'twitter:card'},
	{content: TWITTER_USER, property: 'twitter:creator'},
	{content: SITE_DESC, property: 'twitter:description'},
	{content: SITE_NAME, property: 'twitter:title'},
];

export default class MyDocument extends Document {
	static async getInitialProps (...args: PropsType): {} {
		const documentProps = await super.getInitialProps(...args);
		return {...documentProps, helmet: Helmet.renderStatic()};
	}

	render (): Element<'html'> {
		const {helmet} = this.props;
		const htmlArgs = helmet.htmlAttributes.toComponent();
		const bodyArgs = helmet.bodyAttributes.toComponent();
		const headElements = Object.keys(this.props.helmet)
			.filter((el: string): boolean => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map((el: string): Element<any> => helmet[el].toComponent());

		return (
			<html {...htmlArgs}>
				<Head>
					<Helmet
						htmlAttributes={{lang: 'en'}}
						meta={DEFAULT_META}
						title={SITE_NAME} />
					{headElements}
					<link href='https://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' />
					<link href='/static/favicon.ico' rel='icon' type='image/x-icon' />
					<link href='/_next/static/style.css' rel='stylesheet' />
					<style>{`
					/* Prevent Flash of content for Font Awesome */
					.svg-inline--fa { height: 1em }
					.fa-lg { font-size: 1.33333em; }
					.fa-3x { font-size: 3em }
					`}
					</style>
				</Head>
				<body {...bodyArgs}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
