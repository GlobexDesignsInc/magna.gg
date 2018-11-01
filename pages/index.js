// @flow

// Temporarily here due to:
// https://github.com/zeit/next-plugins/issues/149
import './_document.css';
import React, {type Element, PureComponent} from 'react';
import ReactGA from 'react-ga';
import styles from './index.css';

type PropsType = {};

const __DEV__ = process.env.NODE_ENV !== 'production';

export default class Home extends PureComponent<PropsType> {
	static displayName = 'Home';

	componentDidMount () {
		ReactGA.initialize('UA-250654-12', {
			debug: __DEV__,
		});

		if (window && window.location) {
			const pageName = window.location.pathname + window.location.search;
			ReactGA.set({page: pageName});
			ReactGA.pageview(pageName);
		}
	}

	render (): Element<'div'> {
		return (
			<div className={styles.main}>
				asd
			</div>
		);
	}
}
