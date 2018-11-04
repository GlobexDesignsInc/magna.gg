// @flow

// Temporarily here due to:
// https://github.com/zeit/next-plugins/issues/149
import './../../pages/_document.css';
import React, {type Element, Fragment, memo, type Node} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './PageTemplate.css';

type PropsType = {
	children?: Node,
};

export const PageTemplate = ({
	children,
}: PropsType): Element<typeof Fragment> => (
	<Fragment>
		<Header />
		<div className={styles.content}>
			{children}
		</div>
		<Footer />
	</Fragment>
);

PageTemplate.displayName = 'PageTemplate';

export default memo(PageTemplate);
