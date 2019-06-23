// @flow

/* eslint-disable react/jsx-props-no-spreading */

import Document, {Head, Main, NextScript} from 'next/document';
import React, {type Element} from 'react';
import {type Context} from 'next';
import {Helmet} from 'react-helmet';

// flow-disable-next-line
export default class MyDocument extends Document {
	static async getInitialProps (...args: Context): Promise<any> {
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
					{headElements}
					<link href='https://fonts.googleapis.com/css?family=Roboto:100,300' rel='stylesheet' />
					<link href='/static/favicon.ico' rel='icon' type='image/x-icon' />
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
