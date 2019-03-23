// @flow
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {type Element, memo} from 'react';
import Link from 'next/link';
import styles from './Nav.css';

type PropsType = {
	className?: ?string,
};

export const Nav = ({
	className,
}: PropsType): Element<'nav'> => (
	<nav className={className}>
		<Link href='/' prefetch={true}>
			<a className={styles.link}>Home</a>
		</Link>
		<Link href='/matches' prefetch={true}>
			<a className={styles.link}>Matches</a>
		</Link>
		<Link href='/teams' prefetch={true}>
			<a className={styles.link}>Teams</a>
		</Link>
		<Link href='/store' prefetch={true}>
			<a className={styles.link}>Store</a>
		</Link>
		<Link href='/contact' prefetch={true}>
			<a className={styles.link}>Contact</a>
		</Link>
	</nav>
);

Nav.displayName = 'Nav';

export default memo<PropsType>(Nav);
